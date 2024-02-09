export const getCID = (ipfsURL: URL): string | null => {
  if (ipfsURL.protocol !== 'ipfs:') {
    return null;
  }
  return ipfsURL.hostname + ipfsURL.pathname;
};

export const ipfsURLToGateway = (ipfsURL: URL, gateway: URL): URL | null => {
  const cid = getCID(ipfsURL);
  if (!cid) {
    return null;
  }

  return new URL(`${gateway.origin}/ipfs/${cid}`);
};
