var TETRIS = TETRIS || {}

TETRIS.CanvasModule = (function(blocks) {

  var self,
      $canvas

  var init = function () {
    self = new _Canvas(300, 600)
    $canvas = $(self.body)
    $canvas.attr("width", self.width)
    $canvas.attr("height", self.height)
    _drawGrid();
  }

  var getCanvas = function () {
    return self;
  }

  function _Canvas(width, height) {
    this.width = width;
    this.height = height;
    this.body = document.getElementById("tetris");
    this.ctx = this.body.getContext("2d")
  }

  var _drawGrid = function () {
    self.ctx.save();
    self.ctx.strokeStyle = "black";
    self.ctx.lineWidth = 1;
    for (var x = self.width/10; x <= self.width; x += self.width/10) {
      self.ctx.beginPath();
      self.ctx.moveTo(x, 0);
      self.ctx.lineTo(x, self.height);
      self.ctx.closePath();
      self.ctx.stroke();
    }

    for (var y = self.height / 20; y <= self.height; y += self.height / 20) {
      self.ctx.beginPath();
      self.ctx.moveTo(0, y);
      self.ctx.lineTo(self.width, y);
      self.ctx.closePath();
      self.ctx.stroke();
    }
    self.ctx.restore();
  }

  var _drawBlocks = function () {
    blocks.allBlocks.forEach(function(block) {
      self.ctx.fillStyle = block.color;
      self.ctx.fillRect(block.startingX, block.startingY, block.width, block.height)

    })
  }

  var redraw = function() {
    console.log("redrawing...")
    self.ctx.clearRect(0, 0, self.width, self.height);
    _drawGrid();
    _drawBlocks();
  }

  return {
    init: init,
    redraw: redraw,
    getCanvas: getCanvas,
  }

})(TETRIS.BlockModule);