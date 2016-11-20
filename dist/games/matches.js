"use strict";
const game_1 = require("./game");
class Matches extends game_1.Game {
    constructor(matches_left) {
        super("Das Streichholzspiel");
        this.matches_left = matches_left;
    }
    getNumberOfMatches() {
        return this.matches_left;
    }
    setNumberOfMatches(matches) {
        this.matches_left = matches;
    }
}
exports.Matches = Matches;
