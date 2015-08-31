'use strict';

var chai = chai || require('chai');
var bitcore = bitcore || require('../bitcore');

var should = chai.should();

var PeerModule = bitcore.Peer;
var Peer;

describe('Peer', function() {
  it('should initialze the main object', function() {
    should.exist(PeerModule);
  });
  it('should be able to create class', function() {
    Peer = PeerModule;
    should.exist(Peer);
  });
  it('should be able to create instance', function() {
    var p = new Peer('localhost', 7333);
    should.exist(p);
  });
  it('should be able to create instance', function() {
    var p = new Peer('localhost:7333');
    should.exist(p);
  });
  it('should be able to create instance', function() {
    var p = new Peer('localhost:7333');
    var p2 = new Peer(p);
    should.exist(p2);
  });
  it('should not be able to create instance', function() {
    should.throw(function() {
      new Peer(7333);
    });
  });
  it('should be able to create instance', function() {
    var p = new Peer('localhost', 7333);
    p.toString().should.equal('localhost:7333');
  });
  it('check host as buffer', function() {
    var p = new Peer('127.0.0.1', 7333);
    p.getHostAsBuffer().toString('hex').should.equal('7f000001');
  });
});





