import { expect, test } from 'vitest';
import { createPublicClient, getAddress, http } from 'viem';
import { mainnet } from 'viem/chains';
import { fetchLootMetadata } from '../../src/metadata/loot';

test('test loot extension', async () => {
  const expectedResponse = {
    attributes: [
      {
        traitType: 'Weapon',
        value: '"Grim Shout" Grave Wand of Skill +1',
      },
      { traitType: 'Chest', value: 'Hard Leather Armor' },
      { traitType: 'Head', value: 'Divine Hood' },
      { traitType: 'Waist', value: 'Hard Leather Belt' },
      {
        traitType: 'Foot',
        value: '"Death Root" Ornate Greaves of Skill',
      },
      { traitType: 'Hand', value: 'Studded Leather Gloves' },
      { traitType: 'Neck', value: 'Necklace of Enlightenment' },
      { traitType: 'Ring', value: 'Gold Ring' },
    ],
  };

  const LOOT_CONTRACT = getAddress('0xFF9C1b15B16263C61d017ee9F65C50e4AE0113D7');

  const client = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const response = await fetchLootMetadata(client, LOOT_CONTRACT, 1n);
  expect(response).toEqual(expectedResponse);
});
