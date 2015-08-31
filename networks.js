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
    hash: hex('25CB096CE859C340FE85E621FC51370A4607EDFF5C86B9E2ABEACA4D02000000'),
    merkle_root: hex('695355ECC768DD37609F71D53EB251A3CC0BFC87DCE5E574FD230460CE15B99F'),
    height: 0,
    nonce: 1757951709,
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
    merkle_root: hex('695355ECC768DD37609F71D53EB251A3CC0BFC87DCE5E574FD230460CE15B99F'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(28), 0),
    timestamp: 1296688602,
    bits: 487587839,
  },
  dnsSeeds: [
    'testnet-seed.hull-coin.org'
  ],
  defaultClientPort: 17333
};
