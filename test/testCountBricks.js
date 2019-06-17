var assert  = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;
const LegoPile = lego.LegoPile;

describe('Method', function() {
  describe('#count()', function() {
    it('should return 0 for an empty pile', function() {
      var pile = new LegoPile();
      assert.equal(pile.count(), 0);
    });
    
    it('should return 1 for one red Brick', function() {
      var pile = new LegoPile();
      var redBrick = new Brick(5, "red");
      pile.insert(redBrick);
      assert.equal(pile.count(), 1);
    });
    
    it('should return 6 for one brick in each color', function() {
      var pile = new LegoPile();
      var redBrick = new Brick(5, "red");
      var greenBrick = new Brick(5, "green");
      var blueBrick = new Brick(5, "blue");
      var yellowBrick = new Brick(5, "yellow");
      var whiteBrick = new Brick(5, "white");
      var blackBrick = new Brick(5, "black");
      pile.insert(redBrick);
      pile.insert(greenBrick);
      pile.insert(blueBrick);
      pile.insert(yellowBrick);
      pile.insert(whiteBrick);
      pile.insert(blackBrick);
      assert.equal(pile.count(), 6);
    });
    
    it('should return 18 for three bricks in each color', function() {
      var pile = new LegoPile();
      var redRootBrick = new Brick(5, "red");
      var greenRootBrick = new Brick(5, "green");
      var blueRootBrick = new Brick(5, "blue");
      var yellowRootBrick = new Brick(5, "yellow");
      var whiteRootBrick = new Brick(5, "white");
      var blackRootBrick = new Brick(5, "black");
      
      var redLeftBrick = new Brick(3, "red");
      var greenLeftBrick = new Brick(3, "green");
      var blueLeftBrick = new Brick(3, "blue");
      var yellowLeftBrick = new Brick(3, "yellow");
      var whiteLeftBrick = new Brick(3, "white");
      var blackLeftBrick = new Brick(3, "black");
      
      var redRightBrick = new Brick(7, "red");
      var greenRightBrick = new Brick(7, "green");
      var blueRightBrick = new Brick(7, "blue");
      var yellowRightBrick = new Brick(7, "yellow");
      var whiteRightBrick = new Brick(7, "white");
      var blackRightBrick = new Brick(7, "black");
      
      pile.insert(redRootBrick);
      pile.insert(greenRootBrick);
      pile.insert(blueRootBrick);
      pile.insert(yellowRootBrick);
      pile.insert(whiteRootBrick);
      pile.insert(blackRootBrick);
      
      pile.insert(redLeftBrick);
      pile.insert(greenLeftBrick);
      pile.insert(blueLeftBrick);
      pile.insert(yellowLeftBrick);
      pile.insert(whiteLeftBrick);
      pile.insert(blackLeftBrick);
      
      pile.insert(redRightBrick);
      pile.insert(greenRightBrick);
      pile.insert(blueRightBrick);
      pile.insert(yellowRightBrick);
      pile.insert(whiteRightBrick);
      pile.insert(blackRightBrick);
      
      assert.equal(pile.count(), 18);
    });
  });
});
