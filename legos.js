module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;
var bst = require('./bst');

const BST = bst.BST;

function Brick(size, color) {
  this.size = size;
  this.color = color;
}

function LegoPile() {
  this.dictionary = {
    "red": new BST(),
    "green": new BST(),
    "blue": new BST(),
    "yellow": new BST(),
    "black": new BST(),
    "white": new BST()
  };
  this.insert = insert;
}

function insert(brick) {
  for (var key in this.dictionary) {
    if (key === brick.color) {
      this.dictionary[key].insert(brick);
    }
  }
}
