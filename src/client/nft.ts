import { ERC1155_INTERFACE_ID, ERC721_INTERFACE_ID } from 'src/constants/eip165';
import { EIP165_ABI, ERC721_ABI, ERC1155_ABI } from 'src/abi/';
import type { PublicClient } from 'viem';
import type { NFT, NFTData } from 'src/lib/types';
import { getNFTMetadata } from './nftMetadata';

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

    const nftData: NFTData = {
      address,
      chainId: client.chain?.id,
      ...nftMetadata,
    };

    return nftData;
  },
});

export { nft };
