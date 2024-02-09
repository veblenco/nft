<h1 style="text-align: center">NFT</h1>
<p style="text-align: center"><strong>NFT metadata parser</strong></p>
<p align="center">
    <img src="https://img.shields.io/github/stars/veblenco/nft.svg?style=flat-square"/>
    <img src="https://img.shields.io/github/license/veblenco/nft.svg?style=flat-square"/>
</p>

## Features

- ⚡️ Blasting fast
- 🔒 Typescript
- 🛠️ Tested
- 🪽 Lightweight
- 🔋 Batteries included
- ⛓️ Multi-chain support

## Usage

Add Package:

```sh
npm install veblenco/nft
```

Use Package:

```javascript
import { nft } from 'veblenco/nft';

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

## Supported NFT's

| Contract | Address |
| -------- | ------- |
| Autoglphys | `0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782` |
| Loot | `0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7` |
| Hashmasks | `0xC2C747E0F7004F9E8817Db2ca4997657a7746928` |