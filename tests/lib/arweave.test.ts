import { expect, test } from 'vitest';
import { getTransactionId, arweaveURLToHTTP } from 'src/lib/arweave';

test('test arweave correct url', async () => {
  const tokenURI = new URL('ar://0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw');
  const transactionId = getTransactionId(tokenURI);
  expect(transactionId).toEqual('0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw');
});

test('test arweave gateway', async () => {
  const tokenURI = new URL('ar://0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw');
  const gateway = new URL('https://arweave.net/');
  const gatewayURL = arweaveURLToHTTP(tokenURI, gateway);
  expect(gatewayURL).toEqual(new URL('https://arweave.net/0QKTgWhM7PDoRZabeJeguoYypaSolRlqhChkKSI3GHw'));
});
