export const getTransactionId = (arweaveURL: URL): string | null => {
  if (arweaveURL.protocol !== 'ar:') {
    return null;
  }
  return arweaveURL.hostname + arweaveURL.pathname;
};

export const arweaveToHTTP = (arweaveURL: URL, gateway: URL): URL | null => {
  const transactionId = getTransactionId(arweaveURL);
  if (!transactionId) {
    return null;
  }

  return new URL(`${gateway.origin}/${transactionId}`);
};
