import { LOOT_ABI } from '../abi/LootABI';
import { Address, PublicClient } from 'viem';

export async function fetchLootMetadata(client: PublicClient, tokenAddress: Address, tokenId: bigint) {
  const lootContract = {
    address: tokenAddress,
    abi: LOOT_ABI,
  };

  const response = await client.multicall({
    contracts: [
      {
        ...lootContract,
        functionName: 'getWeapon',
        args: [tokenId],
      },
      {
        ...lootContract,
        functionName: 'getChest',
        args: [tokenId],
      },
      {
        ...lootContract,
        functionName: 'getHead',
        args: [tokenId],
      },
      {
        ...lootContract,
        functionName: 'getWaist',
        args: [tokenId],
      },
      {
        ...lootContract,
        functionName: 'getFoot',
        args: [tokenId],
      },
      {
        ...lootContract,
        functionName: 'getHand',
        args: [tokenId],
      },
      {
        ...lootContract,
        functionName: 'getNeck',
        args: [tokenId],
      },
      {
        ...lootContract,
        functionName: 'getRing',
        args: [tokenId],
      },
    ],
  });

  return {
    attributes: [
      { traitType: 'Weapon', value: response[0].result },
      { traitType: 'Chest', value: response[1].result },
      { traitType: 'Head', value: response[2].result },
      { traitType: 'Waist', value: response[3].result },
      { traitType: 'Foot', value: response[4].result },
      { traitType: 'Hand', value: response[5].result },
      { traitType: 'Neck', value: response[6].result },
      { traitType: 'Ring', value: response[7].result },
    ],
  };
}
