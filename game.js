var TETRIS = TETRIS || {}

TETRIS.GameModule = (function() {

  var _score,
      $scoreDisplay,
      _gameInterval;

  var init = function () {
    _score = 0
    $scoreDisplay = $("#score");
    _updateScore();
    _play();
  }

  var getScore = function () {
    return _score
  }

  var incrementScore = function () {
    _score++;
    _updateScore();
    return _score;
  }

  var _updateScore = function(){
    $scoreDisplay.text("Score: " + _score);
  }

  var _play = function() {
    _gameInterval = setInterval(function() {
      TETRIS.BlockModule.addToFrames();
      TETRIS.BlockModule.updateBlocks();
      TETRIS.CanvasModule.redraw();
    }, 1000 / 60)
  }

  var gameOver = function () {
    clearInterval(_gameInterval);
  }


  return {
    init: init,
    incrementScore: incrementScore,
    getScore: getScore,
    gameOver: gameOver,
  }

})();