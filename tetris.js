var TETRIS = TETRIS || {}

TETRIS.CanvasModule = (function() {

  function Canvas(width, height) {
    this.width = width;
    this.height = height;
    this.body = document.getElementById("tetris");
    this.ctx = this.body.getContext("2d")
  }

  return {
    Canvas: Canvas
  }

})();

TETRIS.BlockModule = (function() {

  function Block(x, y) {
    this.startingX = x;
    this.startingY = y;
    this.width = 25;
    this.height = 25;
  }

  return {
    Block: Block
  }

})();

$(document).ready(function() {

});
