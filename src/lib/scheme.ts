import { arweaveToHTTP } from './arweave';
import { ipfsToHTTP } from './ipfs';

export enum URLScheme {
  IPFS = 'ipfs:',
  ARWEAVE = 'ar:',
  HTTP = 'http:',
  HTTPS = 'https:',
}

export const getScheme = (url: URL): URLScheme | null => {
  const protocol = url.protocol;
  if (protocol === URLScheme.IPFS) {
    return URLScheme.IPFS;
  } else if (protocol === URLScheme.ARWEAVE) {
    return URLScheme.ARWEAVE;
  } else if (protocol === URLScheme.HTTP || protocol === URLScheme.HTTPS) {
    return URLScheme.HTTP;
  }
  return null;
};

export const getHTTPURL = (tokenURI: URL, ipfsURLs: URL[], arweaveURLs: URL[]): (URL | null)[] => {
  const urlScheme = getScheme(tokenURI);

  if (urlScheme === null) {
    throw new Error('Invalid URL');
  }

  switch (urlScheme) {
    case URLScheme.IPFS:
      return ipfsURLs.flatMap((ipfsURL) => ipfsToHTTP(tokenURI, ipfsURL));
    case URLScheme.ARWEAVE:
      return arweaveURLs.flatMap((arweaveURL) => arweaveToHTTP(tokenURI, arweaveURL));
    case URLScheme.HTTP:
    case URLScheme.HTTPS:
      return [tokenURI];
    default:
      throw new Error('Invalid URL');
  }
};
