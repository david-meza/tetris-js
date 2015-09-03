var TETRIS = TETRIS || {}

TETRIS.BlockModule = (function() {

  var allBlocks = [],
      activeShape,
      myCanvas,
      frames = 0;

  var init = function(canvas) {
    myCanvas = canvas;
    generateBlock();
  }

  var generateBlock = function () {
    var newBlock = new Block(150, 0, "cyan")
    allBlocks.push(newBlock);
    activeShape = newBlock;
  }

  var addToFrames = function () {
    frames++;
  }

  var updateBlocks = function () {
    for (var i = 0; i < allBlocks.length; i++) {
      allBlocks[i].tic();
    };
  }

  function Block(x, y, color) {
    this.startingX = x;
    this.startingY = y;
    this.width = 30;
    this.height = 30;
    this.color = color
    this.fallingSpeed = 30;
    this.fixed = false;
  }

  Block.prototype.tic = function() {
    if (frames % 60 !== 0) return;
    var self = this
    allBlocks.forEach(function(block) {
      if (block == self) return;
      if (self.collides(block)) stopBlock(self);
    })
    if (this.outOfBounds()) stopBlock(self);
    this.startingY += this.fallingSpeed
  };

  Block.prototype.collides = function(block){
    return ((this.startingX + this.width >= block.startingX) &&
            (block.startingX + block.width >= this.startingX) &&
            (this.startingY + this.height >= block.startingY) &&
            (block.startingY + block.height >= this.startingY))
  }

  Block.prototype.outOfBounds = function() {
    return (this.startingY + this.height >= myCanvas.height)
  }

  var stopBlock = function() {
    self.fallingSpeed = 0;
    self.fixed = true;
    activeShape = null;
    generateBlock();
  }

  var moveRight = function () {
    if (activeShape.startingX + activeShape.width < myCanvas.width) {
      activeShape.startingX += activeShape.width;
    };
  }

  var moveLeft = function () {
    if (activeShape.startingX > 0) {
      activeShape.startingX -= activeShape.width;
    }
  }

  var moveDown = function () {
    activeShape.startingY += activeShape.fallingSpeed
  }

  return {
    init: init,
    Block: Block,
    updateBlocks: updateBlocks,
    generateBlock: generateBlock,
    allBlocks: allBlocks,
    moveRight: moveRight,
    moveLeft: moveLeft,
    moveDown: moveDown,
    addToFrames: addToFrames
  }

})();