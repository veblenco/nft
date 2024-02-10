import { expect, test } from 'vitest';
import {
  SUPERRARE_ADDRESS,
  DECENTRALAND_ADDRESS,
  ZORA_ADDRESS,
  FOUNDATION_ADDRESS,
  MAKERSPLACE_ADDRESS,
  NOUNS_ADDRESS,
  LIL_NOUNS_ADDRESS,
  RARIBLE_ADDRESS,
  ENS_ADDRESS,
  WRAPPED_CRYPTOPUNKS_ADDRESS,
  BLITMAP_ADDRESS,
  HEAVEN_COMPUTER_ADDRESS,
  POTION_ART_ADDRESS,
  LOOT_ADDRESS,
  AUTOGLYPHS_ADDRESS,
} from 'src/constants/addresses';

test('test SUPERRARE_ADDRESS', () => {
  const mainnetId = 1;
  const address = SUPERRARE_ADDRESS[mainnetId];
  expect(address).toBe('0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0');
});

test('test DECENTRALAND_ADDRESS', () => {
  expect(DECENTRALAND_ADDRESS[1]).toBe('0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d');
});

test('test ZORA_ADDRESS', () => {
  expect(ZORA_ADDRESS[1]).toBe('0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7');
  expect(ZORA_ADDRESS[137]).toBe('0x6953190AAfD8f8995e8f47e8F014d0dB83E92300');
  expect(ZORA_ADDRESS[80001]).toBe('0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7');
});

test('test FOUNDATION_ADDRESS', () => {
  expect(FOUNDATION_ADDRESS[1]).toBe('0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405');
});

test('test MAKERSPLACE_ADDRESS', () => {
  expect(MAKERSPLACE_ADDRESS[1]).toBe('0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756');
});

test('test NOUNS_ADDRESS', () => {
  expect(NOUNS_ADDRESS[1]).toBe('0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03');
});

test('test LIL_NOUNS_ADDRESS', () => {
  expect(LIL_NOUNS_ADDRESS[1]).toBe('0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B');
});

test('test RARIBLE_ADDRESS', () => {
  expect(RARIBLE_ADDRESS[1]).toBe('0x60F80121C31A0d46B5279700f9DF786054aa5eE5');
});

test('test ENS_ADDRESS', () => {
  expect(ENS_ADDRESS[1]).toBe('0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85');
});

test('test WRAPPED_CRYPTOPUNKS_ADDRESS', () => {
  expect(WRAPPED_CRYPTOPUNKS_ADDRESS[1]).toBe('0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6');
});

test('test BLITMAP_ADDRESS', () => {
  expect(BLITMAP_ADDRESS[1]).toBe('0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63');
});

test('test HEAVEN_COMPUTER_ADDRESS', () => {
  expect(HEAVEN_COMPUTER_ADDRESS[1]).toBe('0x80ADB36595239fe918c7D118C1F81e07d070801a');
});

test('test POTION_ART_ADDRESS', () => {
  expect(POTION_ART_ADDRESS[1]).toBe('0xdA98f59e1EDeCb2545d7b07B794e704ed6cF1f7A');
});

test('test LOOT_ADDRESS', () => {
  expect(LOOT_ADDRESS[1]).toBe('0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7');
});

test('test AUTOGLYPHS_ADDRESS', () => {
  expect(AUTOGLYPHS_ADDRESS[1]).toBe('0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782');
});