import type { Address, Client } from 'viem';

export type NFT = {
  parseMetadata: (address: Address, tokenId: bigint) => Promise<any>;
};

const nft = (client: Client, ipfsGateway: URL, arweaveGateway: URL): NFT => ({
  parseMetadata: async (address, tokenId) => {
    return null;
  },
});

export { nft };
