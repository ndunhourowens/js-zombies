var mocha = require('../lib/js/mocha');
var chai = require('../lib/js/chai');
var expect = chai.expect;
var should = chai.should();

var zombies = require('../zombies');

describe('Item', function() {
  it('should be a function', function() {
    zombies.should.have.property('name');

  });
});