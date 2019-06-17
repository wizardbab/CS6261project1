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
  this.hasBrick = hasBrick;
  this.count = count;
}

function insert(brick) {
  for (var key in this.dictionary) {
    if (key === brick.color) {
      this.dictionary[key].insert(brick);
    }
  }
}

function hasBrick(size, color) {
  var BST = this.dictionary[color];
  var current = BST.root;
  if (current == null) {
    return false;
  }
  while (current.data.size != size) {
    if (size < current.data.size) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return false;
    }
  }
  if (current.data.color === color) {
    return true;
  } else {
    return false;
  }
}

function count() {
  var count = 0;
  for (var key in this.dictionary) {
    count += this.dictionary[key].count();
  }
  return count;
}
