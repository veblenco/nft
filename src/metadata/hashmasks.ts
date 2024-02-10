import { HASHMAPS_ABI } from '../abi/HashmaskABI';
import { Address, PublicClient } from 'viem';

export async function fetchHashmasksMetadata(client: PublicClient, tokenAddress: Address, index: bigint) {
  return await client.readContract({
    address: tokenAddress,
    abi: HASHMAPS_ABI,
    functionName: 'tokenNameByIndex',
    args: [index],
  });
}
