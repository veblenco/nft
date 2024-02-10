import { getHTTPURL } from 'src/lib/scheme';
import { NFTMetadata } from 'src/lib/types';

export const getNFTMetadata = async (rsponse: any, ipfsURL: URL, arweaveURL: URL): Promise<NFTMetadata> => {
  const name = rsponse[0].result;
  const symbol = rsponse[1].result;
  const tokenURI = new URL(rsponse[2].result as string);

  let nftMetadata: NFTMetadata = {
    name,
    symbol,
    tokenURI: tokenURI.toString(),
  };

  const httpURL = getHTTPURL(tokenURI, ipfsURL, arweaveURL);

  if (httpURL === null) {
    return nftMetadata;
  }
  const metadataResponse = await fetch(httpURL);
  const metadata = await metadataResponse.json();

  nftMetadata.metadata = metadata;

  const urlMetadataKeys: (keyof NFTMetadata)[] = ['image', 'animation_url'];

  for (const key of urlMetadataKeys) {
    if (metadata[key]) {
      const url = new URL(metadata[key], tokenURI);
      const httpURL = getHTTPURL(url, ipfsURL, arweaveURL);
      if (httpURL === null) {
        continue;
      }
      nftMetadata[key] = httpURL.toString();
    }
  }
  return nftMetadata;
};
