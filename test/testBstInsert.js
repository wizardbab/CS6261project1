var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('Method', function() {
  describe('#insert()', function() {
    it('should return the Brick inserted', function() {
      var newBrick = new Brick(4, "Red");
      var binaryTree = new BST();
      binaryTree.insert(newBrick);
      assert.equal(binaryTree.root.data, newBrick);
    });
  });
});
