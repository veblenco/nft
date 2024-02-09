import { expect, test } from 'vitest';
import { createPublicClient, getAddress, http } from 'viem';
import { mainnet } from 'viem/chains';
import { fetchHashmasksMetadata } from '../../src/metadata/hashmasks';

test('test hashmasks extension', async () => {
  const HASHMASKS_CONTRACT = getAddress('0xC2C747E0F7004F9E8817Db2ca4997657a7746928');

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const response = await fetchHashmasksMetadata(client, HASHMASKS_CONTRACT, 1n);
  expect(response).toEqual('Trump');
});
