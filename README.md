# NFT Metadata

NFT metadata parser

## Usage

Add Package:

```sh
npm add veblen/nft
```

Use Package:

```javascript
import { nft } from 'veblen/nft';

const client = createPublicClient({
    chain: mainnet,
    transport: http(),
}).extend((client) => ({
    nft: nft(
        client, 
        new URL('https://cloudflare-ipfs.com'), 
        new URL('https://arweave.net/')
    ),
}));

const metadata = await client.nft.parseMetadata(<nft-contract-address>, 1n);
```