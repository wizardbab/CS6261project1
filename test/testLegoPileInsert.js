var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;

describe('Method', function() {
  describe('#insert()', function(){
    it('should insert one brick into red BST', function() {
      var redBrick = new Brick(10, "red");
      var legoPile = new LegoPile();
      legoPile.insert(redBrick);
      
      assert.equal(legoPile.dictionary.red.root.data, redBrick);
      assert.equal(legoPile.dictionary.blue.root, null);
      assert.equal(legoPile.dictionary.green.root, null);
      assert.equal(legoPile.dictionary.yellow.root, null);
      assert.equal(legoPile.dictionary.white.root, null);
      assert.equal(legoPile.dictionary.black.root, null);
    });
    
    it('should insert one brick into each BST', function() {
      var redBrick = new Brick(10, "red");
      var greenBrick = new Brick(10, "green");
      var blueBrick = new Brick(10, "blue");
      var yellowBrick = new Brick(10, "yellow");
      var whiteBrick = new Brick(10, "white");
      var blackBrick = new Brick(10, "black");
      var legoPile = new LegoPile();
      
      legoPile.insert(redBrick);
      legoPile.insert(greenBrick);
      legoPile.insert(blueBrick);
      legoPile.insert(yellowBrick);
      legoPile.insert(whiteBrick);
      legoPile.insert(blackBrick);
      
      assert.equal(legoPile.dictionary.red.root.data, redBrick);
      assert.equal(legoPile.dictionary.green.root.data, greenBrick);
      assert.equal(legoPile.dictionary.blue.root.data, blueBrick);
      assert.equal(legoPile.dictionary.yellow.root.data, yellowBrick);
      assert.equal(legoPile.dictionary.white.root.data, whiteBrick);
      assert.equal(legoPile.dictionary.black.root.data, blackBrick);
    });
    
    it('should insert several bricks into red BST', function() {
      var rootBrick = new Brick(5, "red");
      var leftBrick = new Brick(3, "red");
      var rightBrick = new Brick(7, "red");
      var greenBrick = new Brick(5, "green");
      var blueBrick = new Brick(5, "blue");
      var pile = new LegoPile();
      
      pile.insert(rootBrick);
      pile.insert(leftBrick);
      pile.insert(rightBrick);
      pile.insert(greenBrick);
      pile.insert(blueBrick);
      
      assert.equal(pile.dictionary.green.root.data, greenBrick);
      assert.equal(pile.dictionary.blue.root.data, blueBrick);
      assert.equal(pile.dictionary.red.root.data, rootBrick);
      assert.equal(pile.dictionary.red.root.left.data, leftBrick);
      assert.equal(pile.dictionary.red.root.right.data, rightBrick);
      assert.equal(pile.dictionary.yellow.root, null);
      assert.equal(pile.dictionary.white.root, null);
      assert.equal(pile.dictionary.black.root, null);
    });
  });
});
