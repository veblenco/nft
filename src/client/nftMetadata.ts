import { getHTTPURL } from '../lib/scheme';
import { NFTMetadata } from '../lib/types';

export const getNFTMetadata = async (response: any, ipfsURLs: URL[], arweaveURLs: URL[]): Promise<NFTMetadata> => {
  const name = response[0].result;
  const symbol = response[1].result;
  const tokenURI = new URL(response[2].result as string);

  let nftMetadata: NFTMetadata = {
    name,
    symbol,
    tokenURI: tokenURI.toString(),
  };

  const httpURLs: URL[] = getHTTPURL(tokenURI, ipfsURLs, arweaveURLs).filter((url): url is URL => url !== null);

  if (httpURLs.length === 0) {
    return nftMetadata;
  }

  for (const [index, httpURL] of httpURLs.entries()) {
    try {
      const metadataResponse = await fetch(httpURL);
      const metadata = await metadataResponse.json();

      nftMetadata.metadata = metadata;

      const urlMetadataKeys: (keyof NFTMetadata)[] = ['image', 'animation_url'];

      for (const key of urlMetadataKeys) {
        if (metadata[key]) {
          const url = new URL(metadata[key], tokenURI);
          const httpURLs: URL[] = getHTTPURL(url, ipfsURLs, arweaveURLs).filter((url): url is URL => url !== null);

          if (httpURLs.length === 0) {
            continue;
          }
          nftMetadata[key] = httpURLs[index].toString();
        }
      }
      return nftMetadata;
    } catch (error) {
      console.error(`Failed to fetch metadata from ${httpURL}: ${error}`);
    }
  }

  return nftMetadata;
};
