import { ERC1155_INTERFACE_ID, ERC721_INTERFACE_ID } from 'src/constants/eip165';
import { EIP165_ABI, ERC721_ABI, ERC1155_ABI } from 'src/abi/';
import type { PublicClient } from 'viem';
import { getHTTPURL } from 'src/lib/scheme';
import type { NFT, NFTData, NFTMetadata } from 'src/lib/types';

const nft = (client: PublicClient, ipfsURL: URL, arweaveURL: URL): NFT => ({
  parseMetadata: async (address, tokenId) => {
    const supportsInterfaceContract = {
      address: address,
      abi: EIP165_ABI,
    };

    const interfaceResponse = await client.multicall({
      contracts: [
        {
          ...supportsInterfaceContract,
          functionName: 'supportsInterface',
          args: [ERC721_INTERFACE_ID],
        },
        {
          ...supportsInterfaceContract,
          functionName: 'supportsInterface',
          args: [ERC1155_INTERFACE_ID],
        },
      ],
    });

    // if both interface response are false, return empty object
    if (!interfaceResponse[0].result && !interfaceResponse[1].result) {
      return null;
    }

    // set ABI and contract address based on the interface response
    const abi = interfaceResponse[0].result ? ERC721_ABI : ERC1155_ABI;

    const nftContract = {
      address: address,
      abi: abi,
    };

    const contractResponse = await client.multicall({
      contracts: [
        {
          ...nftContract,
          functionName: 'name',
        },
        {
          ...nftContract,
          functionName: 'symbol',
        },
        {
          ...nftContract,
          functionName: 'tokenURI',
          args: [tokenId],
        },
      ],
    });

    const nftMetadata = await getNFTMetadata(contractResponse, ipfsURL, arweaveURL);

    const nftdata: NFTData = {
      address,
      chainId: client.chain?.id,
      ...nftMetadata,
    };

    return nftdata;
  },
});

const getNFTMetadata = async (rsponse: any, ipfsURL: URL, arweaveURL: URL): Promise<NFTMetadata> => {
  const name = rsponse[0].result;
  const symbol = rsponse[1].result;
  const tokenURI = new URL(rsponse[2].result as string);

  let nftMetadata: NFTMetadata = {
    name,
    symbol,
    tokenURI: tokenURI.toString(),
  };

  const httpURL = getHTTPURL(tokenURI, ipfsURL, arweaveURL);

  if (httpURL === null) {
    return nftMetadata;
  }
  const metadataResponse = await fetch(httpURL);
  const metadata = await metadataResponse.json();

  if (metadata.name) {
    nftMetadata.metadata = metadata;
  }

  const urlMetadataKeys: (keyof NFTMetadata)[] = ['image', 'animation_url'];

  for (const key of urlMetadataKeys) {
    if (metadata[key]) {
      const url = new URL(metadata[key], tokenURI);
      const httpURL = getHTTPURL(url, ipfsURL, arweaveURL);
      if (httpURL === null) {
        continue;
      }
      nftMetadata[key] = httpURL.toString();
    }
  }
  return nftMetadata;
};

export { nft };
