var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('Constructor', function() {
  describe('#Brick()', function() {
    it('should return null for size', function() {
      assert.equal(Brick.size, null);
    });
    it('should return null for color', function() {
      assert.equal(Brick.color, null);
    });
  });
});
