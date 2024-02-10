import { ERC1155_INTERFACE_ID, ERC721_INTERFACE_ID } from 'src/constants/eip165';
import { EIP165_ABI } from 'src/abi/EIP165ABI';
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

    if (interfaceResponse[0].result) {
      // PARSE 721
      return null;
    } else if (interfaceResponse[1].result) {
      // PARSE 1155
      return null;
    } else {
      return {};
    }
  },
});

export { nft };
