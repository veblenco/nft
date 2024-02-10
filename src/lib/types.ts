import { Address } from 'viem';

export interface NFT {
  parseMetadata: (address: Address, tokenId: bigint) => Promise<any>;
}

export interface NFTData {
  address: Address;
  chainId?: number;
  name: string;
  symbol: string;
  tokenURI: string;
  metadata?: any;
  image?: string;
  animation_url?: string;
}

export interface NFTMetadata {
  name: string;
  symbol: string;
  tokenURI: string;
  metadata?: any;
  image?: string;
  animation_url?: string;
}
