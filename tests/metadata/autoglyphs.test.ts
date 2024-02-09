import { expect, test } from 'vitest';
import { createPublicClient, getAddress, http } from 'viem';
import { mainnet } from 'viem/chains';
import { fetchAutoglyphsMetadata } from 'src/metadata/autoglyphs';

test('test autoglphys extension', async () => {
  const AUTOGLYPHS_CONTRACT = getAddress('0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782');

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const response = await fetchAutoglyphsMetadata(client, AUTOGLYPHS_CONTRACT, 1n);
  expect(response).toEqual({ properties: { 'Symbol Scheme': 'O|-' } });
});
