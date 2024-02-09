import type { Address, Client } from "viem"

export type NFTMetadata = {
    parse: (
        address: Address,
        tokenId: bigint
    ) => Promise<any>
}

const nftMetadata = (client: Client, ipfsGateway: URL, arweaveGateway: URL): NFTMetadata => ({
  parse: async (address, tokenId) => {
    return null;
  },
});

export { nftMetadata };