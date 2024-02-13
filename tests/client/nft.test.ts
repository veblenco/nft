import { expect, test } from 'vitest';
import { createPublicClient, getAddress, http } from 'viem';
import { mainnet } from 'viem/chains';
import { nft } from '../../src';

test('create nft extension with 721', async () => {
  const PRADA_TIME_CAPSULE_ADDRESS = getAddress('0x0e220A4F3957C17a2e780922DBC13Cb2C9aa4274');

  const expectResponse = {
    address: '0x0e220A4F3957C17a2e780922DBC13Cb2C9aa4274',
    chainId: 1,
    name: 'Prada Timecapsule',
    symbol: 'PTC',
    tokenURI: 'ipfs://QmZdeE86Az7m5kroGZLyFTgWrd8QyLo21czRu8kbRzTNwE',
    metadata: {
      name: 'PRADA Timecapsule: June 2022 - Cass x Prada',
      description:
        'The Prada Timecapsule NFT is gifted alongside the physical Timecapsule piece.\r\n' +
        '\r\n' +
        'The NFT includes the drop serial number and the numbering of each physical item in order to have an exact correspondence. NFT owners are then offered exclusive benefits and experiences as well as access to future drops.\r\n' +
        '\r\n' +
        'In a play on shapes, the iconic capsule, the symbol of Prada Timecapsule #30 drops, is transformed into the emblem of artist Cassius Hirst, his cerebral scan.\r\n' +
        '\r\n' +
        '\r\n' +
        '\r\n' +
        'Terms and conditions: [www.prada.com/prada-crypted/legal](https://www.prada.com/prada-crypted/legal)',
      image: 'ipfs://QmVe4fv85rd8Zz6wBtAgyrnG6e9LqELWrtG7G86TsRzVJC',
      animation_url: 'ipfs://QmTbtQkgsBV2Yy4Z1E6ySwjzdtjzeUAyV3SakqX4GBqU9S',
      properties: {
        color: {
          name: 'Color',
          value: 'Black',
        },
        item_number: {
          name: 'Item number',
          value: '1',
        },
        month: {
          name: 'Month',
          value: 'June',
        },
        year: {
          name: 'Year',
          value: '2022',
        },
      },
    },
    image: 'https://cloudflare-ipfs.com/ipfs/QmVe4fv85rd8Zz6wBtAgyrnG6e9LqELWrtG7G86TsRzVJC',
    animation_url: 'https://cloudflare-ipfs.com/ipfs/QmTbtQkgsBV2Yy4Z1E6ySwjzdtjzeUAyV3SakqX4GBqU9S',
  };

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  }).extend((client) => ({
    nft: nft(client),
  }));

  const metadata = await client.nft.parseMetadata(PRADA_TIME_CAPSULE_ADDRESS, 1n);
  expect(metadata).toEqual(expectResponse);
});

test('create nft extension with 1155', async () => {
  const GIVENCIY_ADDRESS = getAddress('0xE5D8AEdB8DBd3a9eb406E5b11e1838b07712090a');

  const expectResponse = {
    address: '0xE5D8AEdB8DBd3a9eb406E5b11e1838b07712090a',
    chainId: 1,
    name: 'BSTROY x Givenchy by Felt Zine',
    symbol: 'GIV',
    tokenURI: 'ipfs://QmVP9x2GVi5hTESCaBvcde2CNbia4HaG3yhjXmYUmwYESG',
    metadata: {
      animation_url: 'ipfs://QmewdmM3XrWH5VA5ZSpjxbMrvYcvtofBQ3bmozKHTU6QZX',
      description:
        'An NFT Drop by BSTROY x Givenchy collaboration in partnership with Felt Zine. Marking the first series of digital twin NFTs for a selection of products and Givenchy’s second NFT drop. Created exclusively for owners of Gone Def two-headed hoodie',
      image: 'ipfs://QmaVCxwVBwvLW9ebBWq5gYgqrX2LB1GjQKQAFBUU84iMvz',
      name: 'BSTROY x GIVENCHY Gone Def two-headed hoodie',
      properties: {
        Background: 'Universal Birth',
        'Digital Artist 1': 'Felt Zine',
        'Digital Artist 2': 'Mark Sabb',
        'Digital Artist 3': 'Ty Vadovich',
        'Digital Artist 4': 'Jawn Diego',
        'Digital Artist 5': 'Devon Moore',
        'Digital Artist 6': '',
        'Digital Artist 7': '',
        'Digital Artist 8': '',
        'Givenchy Product': 'Gone Def two-headed classic fit hoodie',
      },
    },
    image: 'https://cloudflare-ipfs.com/ipfs/QmaVCxwVBwvLW9ebBWq5gYgqrX2LB1GjQKQAFBUU84iMvz',
    animation_url: 'https://cloudflare-ipfs.com/ipfs/QmewdmM3XrWH5VA5ZSpjxbMrvYcvtofBQ3bmozKHTU6QZX',
  };

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  }).extend((client) => ({
    nft: nft(client),
  }));

  const metadata = await client.nft.parseMetadata(GIVENCIY_ADDRESS, 1n);
  expect(metadata).toEqual(expectResponse);
});

test('create nft extension with WETH', async () => {
  const WETH_ADDRESS = getAddress('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  }).extend((client) => ({
    nft: nft(client),
  }));

  const metadata = await client.nft.parseMetadata(WETH_ADDRESS, 1n);
  expect(metadata).toBeNull();
});

test('create nft extension 1155 with fallbacks', async () => {
  const GIVENCIY_ADDRESS = getAddress('0xE5D8AEdB8DBd3a9eb406E5b11e1838b07712090a');

  const expectResponse = {
    address: '0xE5D8AEdB8DBd3a9eb406E5b11e1838b07712090a',
    chainId: 1,
    name: 'BSTROY x Givenchy by Felt Zine',
    symbol: 'GIV',
    tokenURI: 'ipfs://QmVP9x2GVi5hTESCaBvcde2CNbia4HaG3yhjXmYUmwYESG',
    metadata: {
      animation_url: 'ipfs://QmewdmM3XrWH5VA5ZSpjxbMrvYcvtofBQ3bmozKHTU6QZX',
      description:
        'An NFT Drop by BSTROY x Givenchy collaboration in partnership with Felt Zine. Marking the first series of digital twin NFTs for a selection of products and Givenchy’s second NFT drop. Created exclusively for owners of Gone Def two-headed hoodie',
      image: 'ipfs://QmaVCxwVBwvLW9ebBWq5gYgqrX2LB1GjQKQAFBUU84iMvz',
      name: 'BSTROY x GIVENCHY Gone Def two-headed hoodie',
      properties: {
        Background: 'Universal Birth',
        'Digital Artist 1': 'Felt Zine',
        'Digital Artist 2': 'Mark Sabb',
        'Digital Artist 3': 'Ty Vadovich',
        'Digital Artist 4': 'Jawn Diego',
        'Digital Artist 5': 'Devon Moore',
        'Digital Artist 6': '',
        'Digital Artist 7': '',
        'Digital Artist 8': '',
        'Givenchy Product': 'Gone Def two-headed classic fit hoodie',
      },
    },
    image: 'https://cloudflare-ipfs.com/ipfs/QmaVCxwVBwvLW9ebBWq5gYgqrX2LB1GjQKQAFBUU84iMvz',
    animation_url: 'https://cloudflare-ipfs.com/ipfs/QmewdmM3XrWH5VA5ZSpjxbMrvYcvtofBQ3bmozKHTU6QZX',
  };

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  }).extend((client) => ({
    nft: nft(client, [new URL('https://ipfs-1.veblen.co'), new URL('https://cloudflare-ipfs.com')]),
  }));

  const metadata = await client.nft.parseMetadata(GIVENCIY_ADDRESS, 1n);
  expect(metadata).toEqual(expectResponse);
});
