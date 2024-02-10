import type { NFT, NFTData } from './lib/types';
import { URLScheme, getScheme } from './lib/scheme';
import { nft } from './client/nft';
import { getCID } from './lib/ipfs';
import { getTransactionId } from './lib/arweave';

export type { NFT, NFTData };

export { URLScheme, nft, getCID, getTransactionId, getScheme };
