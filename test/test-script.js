// var mocha = require('../lib/js/mocha');
// var chai = require('../lib/js/chai');
var expect = chai.expect;
var should = chai.should();

// var zombies = require('../zombies');
/*--------------------------------------------------------------*/
// Class => Item(name)
var torch;
beforeEach(function() {
  torch = new Item("torch");
});

describe('Item', function() {
  it('should be a function', function() {
    Item.should.be.a('function');
  });
  it('should have a parameters', function() {
    //torch.should.have.property('torch');
    torch.name.should.equal('torch');
  });
});
/*--------------------------------------------------------------*/
// Class => Weapon(name, damage)

var dagger = new Weapon("dagger", 10);

describe('Weapon', function() {
  it('should be a function', function() {
    Weapon.should.be.a('function');
  });
  it('should have a property of name', function() {
    expect(name instanceof Item);
  });
  it('should have property of damage ', function() {
    dagger.damage.should.equal(10);
  });
  it('should extend from Item class', function() {
    expect(new Weapon('club', 100)).to.be.instanceof(Item);
  });
});

/*--------------------------------------------------------------*/
// Class => Food(name, energy)

var turkey = new Food('turkey', 5);

describe('Food', function() {
  it('should be a class', function() {
    expect(Food).to.be.a('function');
  });
  it('should have a parameter name', function() {
    expect(name instanceof Item);
  });
  it('should have a parameter energy', function() {
    turkey.energy.should.equal(5);
  });
  it('should extend from Item class', function() {
    expect(new Food('sandwich', 200)).to.be.instanceof(Item);
  });
});
/*--------------------------------------------------------------*/
//Player class

var omz = new Player('omz', 100, 200, 150);

describe('Player', function() {
  it('should be a class', function() {
    expect(Player).to.be.a('function');
  });
  it('should have parameter name ', function() {
    omz.name.should.equal('omz');
  });
  it('should have parameter health ', function() {
    omz.health.should.equal(100);
  });
  it('should have parameter strength ', function() {
    omz.strength.should.equal(200);
  });
  it('should have parameter speed ', function() {
    omz.speed.should.equal(150);
  });
  it('shoud have a private array pack', function () {
    expect(Player._pack).to.be.underfined;
  });
  it('shoud have a private maxHealth', function () {
    expect(Player._maxHealth).to.equal.health;
  });
  it('should be a boolean property isAlive', function() {
    expect(true).to.be.true ;
  });
  it('should be a boolean property equipped', function() {
    expect(false).to.be.false ;
  });

  //getPack
  it('should be function ', function() {
    expect(omz.getPack).to.be.a('function');
  });
  it('should return what is in pack u', function() {
    expect(omz.getPack()).to.be.an('array') ;
  });

  //getMaxHealth
  it('should be a function that retruns the maxHealth ', function() {
    expect(omz.getMaxHealth).to.be.a('function') ;
  });
});
/*--------------------------------------------------------------*/
//Player Class Method => checkPack()

var omz = new Player('omz', 100, 200, 150);

describe('.checkPack', function() {
  it('should be a function', function() {
    expect(omz.checkPack).to.be.a('function');
  });
});

/*--------------------------------------------------------------*/
//Player Class Method => takeItem(item)

var omz = new Player('omz', 100, 200, 150);

describe('.takeItem', function() {
  it('should be a function', function() {
    expect(omz.takeItem).to.be.a('function');
  });
  it('should return a boolean', function() {

  });
});

/*--------------------------------------------------------------*/
//Player Class Method => discardItem(item)

var omz = new Player('omz', 100, 200, 150);
var flashlight = new Item('Flashlight');
var butterflyKnife = new Weapon('Butterfly Knife');
var porkChop = new Food('porkChop');

describe('.discardItem', function() {
  it('should be a function', function() {
    expect(omz.discardItem).to.be.a('function');
  });
  it('should have a parameter of the item to discard', function() {
    player.discardItem(porkChop).should.equal('porkChop');
  });
});

/*--------------------------------------------------------------*/
//Player Class Method => equip(itemToEquip)

var omz = new Player('omz', 100, 200, 150);
var pizza = new Food('pizza');

describe('.equip', function() {
  it('should be a function', function() {
    expect(omz.equip).to.be.a('function');
  });
  it('should have parameter of itemToEat', function() {
    pizza.itemsTOEqup.should.be(pizza);
  });
});

/*--------------------------------------------------------------*/
//Player Class Method => eat(itemToEat)

var omz = new Player('omz', 100, 200, 150);

describe('.eat', function() {
  it('should be a function', function() {
    expect(omz.eat).to.be.a('functio');
  });
  // it('should have a parameters', function() {
  //   expect( ).to.be.instanceof( );
  // });
});

/*--------------------------------------------------------------*/
//Player Class Method => useItem(item)
describe('.useItem', function() {
  it('should be a method', function() {
    expect(Player.checkPack).to.be.a('Method');
  });
  // it('should have a parameters', function() {
  //   expect( ).to.be.instanceof( );
  // });
});

/*--------------------------------------------------------------*/
//Player Class Method => equippedWith()
describe('.useItem', function() {
  it('should be a method', function() {
    expect(Player.checkPack).to.be.a('Method');
  });
  // it('should have a parameters', function() {
  //   expect( ).to.be.instanceof( );
  // });
});