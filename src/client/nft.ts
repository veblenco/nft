import type { Address, Client, PublicClient } from 'viem';

export type NFT = {
  parseMetadata: (address: Address, tokenId: bigint) => Promise<any>;
};

const nft = (client: PublicClient, ipfsGateway: URL, arweaveGateway: URL): NFT => ({
  parseMetadata: async (address, tokenId) => {
    return null;
  },
});

export { nft };
