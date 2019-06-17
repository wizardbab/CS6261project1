var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;

describe('Method', function() {
  describe('#hasBrick()', function() {
    it('should return true for root brick', function() {
      var rootBrick = new Brick(5, "red");
      var pile = new LegoPile();
      pile.insert(rootBrick);
      
      assert.equal(pile.hasBrick(5, "red"), true);
    });
    
    it('should return false for root brick', function() {
      var rootBrick = new Brick(5, "red");
      var pile = new LegoPile();
      pile.insert(rootBrick);
      
      assert.equal(pile.hasBrick(4, "red"), false);
      assert.equal(pile.hasBrick(5, "blue"), false);
    });
    
    it('should return true for left brick', function() {
      var rootBrick = new Brick(5, "red");
      var leftBrick = new Brick(3, "blue");
      var pile = new LegoPile();
      pile.insert(rootBrick);
      pile.insert(leftBrick);
      
      assert.equal(pile.hasBrick(3, "blue"), true);
      assert.equal(pile.hasBrick(3, "red"), false);
      assert.equal(pile.hasBrick(5, "red"), true);
    });
  });
});
