var matchesController = require("../../src/games/matches.controller");

describe("MatchesController", function() {

  it("start game", function() {
    matchesController = new MatchesController();
    matchesController.start_game();
    expect(matchesController.game !== undefined);
  });

  it("increase round number", function() {
    matchesController = new MatchesController();
    counter = matchController.counter;
    matchesController.continue_game();
    expect(matchesController.counter > counter);
  });
});
