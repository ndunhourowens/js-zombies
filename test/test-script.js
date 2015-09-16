// var mocha = require('../lib/js/mocha');
// var chai = require('../lib/js/chai');
var expect = chai.expect;
var should = chai.should();

// var zombies = require('../zombies');
/*--------------------------------------------------------------*/
//Item Class
describe('Item', function() {
  it('should be a function', function() {
    expect(Item).to.be.a('function');
  });
  it('should have a parameters', function() {
    expect(Item).to.have.property('name');
  });
});
/*--------------------------------------------------------------*/
describe('Weapon', function() {
  it('should be a function', function() {
    expect(Weapon).to.be.a('function');
  });
  it('should have parameter name ', function() {
    expect(Weapon).to.have.property('name').that.is.a('string') ;
  });
  // it('should have parameter damage ', function() {
  //   expect(Weapon).to.have.property('damage').that.is.a('number');
  // });
  it('should extend from Item class', function() {
    expect(new Weapon('club', 100)).to.be.instanceof(Item);
  });
});

/*--------------------------------------------------------------*/
//Food class
describe('Food', function() {
  it('should be a class', function() {
    expect(Food).to.be.a('function');
  });
  it('should have a parameter name', function() {
    expect(Food).to.have.property('name');
  });
  // it('should have a parameters', function() {
  //   expect(Food).to.have.property('energy');
  // });
  it('should extend from Item class', function() {
    expect(new Food('sandwich', 200)).to.be.instanceof(Item);
  });
});
/*--------------------------------------------------------------*/
//Player class
describe('Player', function() {
  it('should be a class', function() {
    expect(Player).to.be.a('function');
  });
  it('should have parameter name ', function() {
    expect(Player).to.have.property('name').that.is.a('string') ;
  });
  it('should have parameter health ', function() {
    expect(Player).to.have.property('health').that.is.a('number') ;
  });
  it('should have parameter strength ', function() {
    expect(Player).to.have.property('strength').that.is.a('number') ;
  });
  it('should have parameter speed ', function() {
    expect(Player).to.have.property('speed').that.is.a('number') ;
  });
  it('shoud have a private array pack', function () {
    expect(Player).to.have.property('pack').that.is.a('array');
  });
  it('shoud have a private maxHealth', function () {
    expect(Player).to.have.property('maxHealth').that.is.a('array');
  });
  it('should be a boolean property isAlive', function() {
    expect(true).to.be.true ;
  });
  it('should be a boolean property equipped', function() {
    expect(false).to.be.false ;
  });
  // it('should be a method .getPack'), function () {

  // };
  // it('should be a method .getMaxHealth'), function () {

  // };
});
/*--------------------------------------------------------------*/
//Player Class Method => checkPack()
describe('.checkPack', function() {
  it('should be a method', function() {
    expect(Player.checkPack).to.be.a('method');
  });
  it('should return items in players pack', function() {
    expect(Player.checkPack).to.be( 'array');
  });
});

/*--------------------------------------------------------------*/
//Player Class Method => takeItem(item)
describe('.takeItem', function() {
  it('should be a method', function() {
    expect(Player.takeItem).to.be.a('Method');
  });
  it('should retrun a boolean', function() {

  });
});

/*--------------------------------------------------------------*/
//Player Class Method => discardItem(item)
describe('.discardItem', function() {
  it('should be a method', function() {
    expect(Player.checkPack).to.be.a('Method');
  });
  // it('should have a parameters', function() {
  //   expect( ).to.be.instanceof( );
  // });
});
