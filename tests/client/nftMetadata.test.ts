import { expect, test } from 'vitest';
import { createPublicClient, getAddress, http } from 'viem';
import { mainnet } from 'viem/chains';
import { nftMetadata } from '../../src';

test('create nftMetadata extension', async () => {
  const PRADA_TIME_CAPSULE_ADDRESS = getAddress('0x0e220A4F3957C17a2e780922DBC13Cb2C9aa4274');

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  }).extend((client) => ({
    nftMetadata: nftMetadata(client, new URL('https://cloudflare-ipfs.com'), new URL('https://arweave.net/')),
  }));

  const metadata = await client.nftMetadata.parse(PRADA_TIME_CAPSULE_ADDRESS, 1n);
  expect(metadata).toBeNull();
});
