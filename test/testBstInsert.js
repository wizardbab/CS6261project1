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
    
    it('should return the Brick inserted to the left', function() {
      var rootBrick = new Brick(5, "Red");
      var leftBrick = new Brick(2, "Blue");
      var binaryTree = new BST();
      binaryTree.insert(rootBrick);
      binaryTree.insert(leftBrick);
      assert.equal(binaryTree.root.left.data, leftBrick);
    });
    
    it('should return the Brick inserted to the right', function() {
      var rootBrick = new Brick(5, "Red");
      var rightBrick = new Brick(8, "Yellow");
      var binaryTree = new BST();
      binaryTree.insert(rootBrick);
      binaryTree.insert(rightBrick);
      assert.equal(binaryTree.root.right.data, rightBrick);
    });
    
    it('should return the Bricks inserted to the left and right', function() {
      var rootBrick = new Brick(5, "Red");
      var leftBrick = new Brick(2, "Blue");
      var rightBrick = new Brick(8, "Yellow");
      var binaryTree = new BST();
      
      binaryTree.insert(rootBrick);
      binaryTree.insert(leftBrick);
      binaryTree.insert(rightBrick);
      
      assert.equal(binaryTree.root.data, rootBrick);
      assert.equal(binaryTree.root.left.data, leftBrick);
      assert.equal(binaryTree.root.right.data, rightBrick);
    });
    
    it('should return a whole slew of Bricks in a complicated tree', function() {
      var rootBrick = new Brick(5, "Red");
      var leftBrick = new Brick(3, "Red");
      var rightBrick = new Brick(7, "Red");
      var leftLeftBrick = new Brick(2, "Red");
      var leftRightBrick = new Brick(4, "Red");
      var rightLeftBrick = new Brick(6, "Red");
      var rightRightBrick = new Brick(8, "Red");
      var leftLeftLeftBrick = new Brick(1, "Red");
      var rightRightRightBrick = new Brick(9, "Red");
      var binaryTree = new BST();
      
      binaryTree.insert(rootBrick);
      binaryTree.insert(leftBrick);
      binaryTree.insert(rightBrick);
      binaryTree.insert(leftLeftBrick);
      binaryTree.insert(leftRightBrick);
      binaryTree.insert(rightLeftBrick);
      binaryTree.insert(rightRightBrick);
      binaryTree.insert(leftLeftLeftBrick);
      binaryTree.insert(rightRightRightBrick);
      
      assert.equal(binaryTree.root.data, rootBrick);
      assert.equal(binaryTree.root.left.data, leftBrick);
      assert.equal(binaryTree.root.right.data, rightBrick);
      assert.equal(binaryTree.root.left.left.data, leftLeftBrick);
      assert.equal(binaryTree.root.left.right.data, leftRightBrick);
      assert.equal(binaryTree.root.left.left.left.data, leftLeftLeftBrick);
      assert.equal(binaryTree.root.left.left.right, null);
      assert.equal(binaryTree.root.left.right.left, null);
      assert.equal(binaryTree.root.left.right.right, null);
      assert.equal(binaryTree.root.right.left.data, rightLeftBrick);
      assert.equal(binaryTree.root.right.right.data, rightRightBrick);
      assert.equal(binaryTree.root.right.left.left, null);
      assert.equal(binaryTree.root.right.left.right, null);
      assert.equal(binaryTree.root.right.right.left, null);
      assert.equal(binaryTree.root.right.right.right.data, rightRightRightBrick);
      
    });
  });
});
