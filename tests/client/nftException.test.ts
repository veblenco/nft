import { expect, test } from 'vitest';
import { getNFTException } from 'src/client/nftException';

test('create nft extension', async () => {
  const testLoot = getNFTException('0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7', 1);
  expect(testLoot).toBeNull();
});
