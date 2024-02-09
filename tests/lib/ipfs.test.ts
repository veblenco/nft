import { expect, test } from 'vitest';
import { getCID, ipfsURLToGateway } from 'src/lib/ipfs';

test('test ipfs correct url', async () => {
  const tokenURI = new URL('ipfs://QmTTcVQWpJvX2ewhbQr15dPurtnp35knWciRjKnDQaNin5');
  const cid = getCID(tokenURI);
  expect(cid).toEqual('QmTTcVQWpJvX2ewhbQr15dPurtnp35knWciRjKnDQaNin5');
});

test('test ipfs correct url with index', async () => {
  const tokenURI = new URL('ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1');
  const cid = getCID(tokenURI);
  expect(cid).toEqual('QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1');
});

test('test ipfs incorrect url', async () => {
  const tokenURI = new URL('https://cloudflare-ipfs.com/ipfs/QmTTcVQWpJvX2ewhbQr15dPurtnp35knWciRjKnDQaNin5');
  const cid = getCID(tokenURI);
  expect(cid).toBeNull();
});

test('test ipfsURLToGateway', async () => {
  const tokenURI = new URL('ipfs://QmTTcVQWpJvX2ewhbQr15dPurtnp35knWciRjKnDQaNin5');
  const gateway = new URL('https://cloudflare-ipfs.com');
  const gatewayURL = ipfsURLToGateway(tokenURI, gateway);
  expect(gatewayURL).toEqual(
    new URL('https://cloudflare-ipfs.com/ipfs/QmTTcVQWpJvX2ewhbQr15dPurtnp35knWciRjKnDQaNin5')
  );
});

test('test ipfsURLToGateway with index', async () => {
  const tokenURI = new URL('ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1');
  const gateway = new URL('https://cloudflare-ipfs.com');
  const gatewayURL = ipfsURLToGateway(tokenURI, gateway);
  expect(gatewayURL).toEqual(
    new URL('https://cloudflare-ipfs.com/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1')
  );
});
