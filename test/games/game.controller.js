var gameController = require("../../src/games/game.controller");

describe("GameController", function() {

  it("returns an boolean", function() {
    gameController = new GameController();
    gameController.switch_player();
    expect(gameController.current_player.toBe(false);
  });

});
