<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./.github/img/nft-dark.svg">
        <img alt="veblenco/nft" src="./.github/img/nft-light.svg">
    </picture>
    <br>
    <strong>TypeScript NFT Metadata Parser</strong>
</p>
<p align="center">
    <img src="https://img.shields.io/github/stars/veblenco/nft.svg?style=flat-square"/>
    <img src="https://img.shields.io/github/license/veblenco/nft.svg?style=flat-square"/>
</p>

## Features

- ⚡️ Blasting fast
- 🔒 TypeScript ready
- 🛠️ Tested
- 🪽 Lightweight
- ⛓️ Multi-chain
- 🔌 Seamless extension to [Viem](https://viem.sh)
- 💾 [IPFS](https://www.ipfs.com) and [Arweave](https://www.arweave.org)
- 🖼️ [ERC 721](https://ethereum.org/developers/docs/standards/tokens/erc-721) and [ERC 1155](https://ethereum.org/developers/docs/standards/tokens/erc-1155)

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
        new URL('https://arweave.net')
    ),
}));

const metadata = await client.nft.parseMetadata(<nft-contract-address>, 1n);
```

Response:

```json
{
    "name": "",
    "symbol": "",
    "metadata": {

    },
    "image": "",
    "imageData": ""
}
```

## Supported NFT's

| Contract | Address |
| -------- | ------- |
| Autoglphys | `0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782` |
| Loot | `0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7` |
| Hashmasks | `0xC2C747E0F7004F9E8817Db2ca4997657a7746928` |