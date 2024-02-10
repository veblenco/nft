import { expect, test } from 'vitest';
import { createPublicClient, getAddress, http } from 'viem';
import { mainnet } from 'viem/chains';
import { nft } from '../../src';

test('create nft extension', async () => {
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
    nft: nft(client, new URL('https://cloudflare-ipfs.com'), new URL('https://arweave.net/')),
  }));

  const metadata = await client.nft.parseMetadata(PRADA_TIME_CAPSULE_ADDRESS, 1n);
  expect(metadata).toEqual(expectResponse);
});
