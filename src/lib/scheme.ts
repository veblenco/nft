export enum URLScheme {
  IPFS = 'ipfs:',
  ARWEAVE = 'ar:',
  HTTP = 'http:',
  HTTPS = 'https:',
}

export const schemeFilter = (url: URL): URLScheme | null => {
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
