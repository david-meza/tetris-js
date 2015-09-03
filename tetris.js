var TETRIS = TETRIS || {}

TETRIS.ControllerModule = (function(game, canvas, blocks) {

  var KEY = { ESC: 27, SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };

  var init = function () {
    setListeners();
    canvas.init();
    var myCanvas = canvas.getCanvas();
    game.init();
    blocks.init(myCanvas);
  }

  var setListeners = function () {
    $(window).on("keydown", interactWithBlock)
  }

  var interactWithBlock = function(event) {
    switch(event.keyCode) {
      case KEY.LEFT:   blocks.moveLeft();         break;
      case KEY.RIGHT:  blocks.moveRight();        break;
      case KEY.UP:     blocks.rotate();            break;
      case KEY.DOWN:   blocks.moveDown();          break;
      case KEY.ESC:    game.gameOver();           break;
    }
  }

  return {
    init: init,
  }

})(TETRIS.GameModule, TETRIS.CanvasModule, TETRIS.BlockModule);

$(document).ready(function() {
  TETRIS.ControllerModule.init();
});
