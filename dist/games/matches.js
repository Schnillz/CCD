"use strict";
const game_1 = require("./game");
class Matches extends game_1.Game {
    constructor(starting_player, matches_left) {
        super("Das Streichholzspiel", "Das Spiel beginnt", starting_player);
        this.matches_left = matches_left;
    }
    switch_player() {
        this.current_player = !this.current_player;
    }
    subtract_matches(matches) {
        if (matches > this.matches_left) {
        }
        else if (matches === this.matches_left) {
        }
        else {
            this.matches_left = this.matches_left - matches;
        }
    }
}
exports.Matches = Matches;
