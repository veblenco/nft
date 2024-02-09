import { Address, PublicClient } from 'viem';

const ABI_FRAGMENT = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenNameByIndex',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export async function fetchHashmasksMetadata(client: PublicClient, tokenAddress: Address, index: bigint) {
  return await client.readContract({
    address: tokenAddress,
    abi: ABI_FRAGMENT,
    functionName: 'tokenNameByIndex',
    args: [index],
  });
}
