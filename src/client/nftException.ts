import {
  SUPERRARE_ADDRESS,
  HASHMASKS_CONTRACT_ADDRESS,
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
} from '../constants/addresses';
import { Address } from 'viem';

export const getNFTException = (address: Address, chainId?: number) => {
  const isSuperrate = SUPERRARE_ADDRESS[chainId as keyof typeof SUPERRARE_ADDRESS] === address;
  const isHashmask = HASHMASKS_CONTRACT_ADDRESS[chainId as keyof typeof HASHMASKS_CONTRACT_ADDRESS] === address;
  const isDecentraland = DECENTRALAND_ADDRESS[chainId as keyof typeof DECENTRALAND_ADDRESS] === address;
  const isZora = ZORA_ADDRESS[chainId as keyof typeof ZORA_ADDRESS] === address;
  const isFoundation = FOUNDATION_ADDRESS[chainId as keyof typeof FOUNDATION_ADDRESS] === address;
  const isMakersplace = MAKERSPLACE_ADDRESS[chainId as keyof typeof MAKERSPLACE_ADDRESS] === address;
  const isNouns = NOUNS_ADDRESS[chainId as keyof typeof NOUNS_ADDRESS] === address;
  const isLilNouns = LIL_NOUNS_ADDRESS[chainId as keyof typeof LIL_NOUNS_ADDRESS] === address;
  const isRarible = RARIBLE_ADDRESS[chainId as keyof typeof RARIBLE_ADDRESS] === address;
  const isEns = ENS_ADDRESS[chainId as keyof typeof ENS_ADDRESS] === address;
  const isWrappedCryptopunks =
    WRAPPED_CRYPTOPUNKS_ADDRESS[chainId as keyof typeof WRAPPED_CRYPTOPUNKS_ADDRESS] === address;
  const isBlitmap = BLITMAP_ADDRESS[chainId as keyof typeof BLITMAP_ADDRESS] === address;
  const isHeavenComputer = HEAVEN_COMPUTER_ADDRESS[chainId as keyof typeof HEAVEN_COMPUTER_ADDRESS] === address;
  const isPotionArt = POTION_ART_ADDRESS[chainId as keyof typeof POTION_ART_ADDRESS] === address;
  const isLoot = LOOT_ADDRESS[chainId as keyof typeof LOOT_ADDRESS] === address;
  const isAutoglyphs = AUTOGLYPHS_ADDRESS[chainId as keyof typeof AUTOGLYPHS_ADDRESS] === address;

  return null;
};
