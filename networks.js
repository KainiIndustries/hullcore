var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('e8ada3c8'),
  addressVersion: 0x28,
  privKeyVersion: 168,
  P2SHVersion: 100,
  hkeyPublicVersion: 0x019da462,
  hkeyPrivateVersion: 0x019d9cfe,
  genesisBlock: {
    hash: hex('E086B2844BE47DC0624C1471C31B93C421052FFD56E0EE00006B953406000000'),
    merkle_root: hex('3F9C6491EC5A5FD3848FE557DD4D3387F85F0F7F72AD96556FA08CC5F6A5000F'),
    height: 0,
    nonce: 2612529015,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(28), 0),
    timestamp: 1440578000,
    bits: 487587839,
  },
  dnsSeeds: [
    'dnsseed.hull-coin.org'
  ],
  defaultClientPort: 7333
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fa00f8f6'),
  addressVersion: 0x41,
  privKeyVersion: 193,
  P2SHVersion: 127,
  hkeyPublicVersion: 0x0436f6e1,
  hkeyPrivateVersion: 0x0436ef7d,
  genesisBlock: {
    hash: hex('012ddb919294a6318b6a787bcbec3707184562ee0262f7d7cd0a6dac00000000'),
    merkle_root: hex('3F9C6491EC5A5FD3848FE557DD4D3387F85F0F7F72AD96556FA08CC5F6A5000F'),
    height: 0,
    nonce: 2009474294,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(28), 0),
    timestamp: 1440579000,
    bits: 487587839,
  },
  dnsSeeds: [
    'testnet-seed.hull-coin.org'
  ],
  defaultClientPort: 17333
};
