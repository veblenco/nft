import { ERC1155_INTERFACE_ID, ERC721_INTERFACE_ID } from 'src/constants/eip165';
import { EIP165_ABI, ERC721_ABI, ERC1155_ABI } from 'src/abi/';
import type { Address, Client, PublicClient } from 'viem';

export type NFT = {
  parseMetadata: (address: Address, tokenId: bigint) => Promise<any>;
};

const nft = (client: PublicClient, ipfsGateway: URL, arweaveGateway: URL): NFT => ({
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

    console.log(contractResponse);
    // if (interfaceResponse[0].result) {
    //   const;
    //   // PARSE 721
    //   return null;
    // } else if (interfaceResponse[1].result) {
    //   // PARSE 1155
    //   return null;
    // } else {
    //   return {};
    // }

    return null;
  },
});

export { nft };
