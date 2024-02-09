import { Address, PublicClient } from 'viem';

const ABI_FRAGMENT = [
  {
    constant: true,
    inputs: [
      {
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'symbolScheme',
    outputs: [
      {
        name: '',
        type: 'uint8',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
] as const;

const SCHEME_MAP = {
  1: ' X/\\',
  2: '+-|',
  3: '/\\',
  4: '|-/',
  5: 'O|-',
  6: '\\',
  7: '#|-+',
  8: 'OO',
  9: '#',
  10: '#O',
};

export async function fetchAutoglyphsMetadata(client: PublicClient, tokenAddress: Address, tokenId: bigint) {
  const scheme = await client.readContract({
    address: tokenAddress,
    abi: ABI_FRAGMENT,
    functionName: 'symbolScheme',
    args: [tokenId],
  });

  return {
    properties: {
      // @ts-ignore
      'Symbol Scheme': SCHEME_MAP[scheme] || 'Unknown',
    },
  };
}
