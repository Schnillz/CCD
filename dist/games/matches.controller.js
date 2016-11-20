"use strict";
const matches_1 = require("./matches");
const game_controller_1 = require("./game.controller");
class MatchesController extends game_controller_1.GameController {
    constructor() {
        super();
        this.last_computer_move = 0;
    }
    start_game(req, res, router) {
        let start_player = req.body.start_player;
        let number_matches = req.body.number_matches;
        this.game = new matches_1.Matches(number_matches);
        this.counter = 1;
        if (start_player === "B") {
            this.computer_move();
        }
        this.render_frontend(req, res, router);
    }
    continue_game(req, res, router) {
        let matches_subtract = +req.body.matches_subtract;
        let matches_left = this.game.getNumberOfMatches();
        if (!isNaN(matches_subtract)) {
            this.counter++;
            this.game.setNumberOfMatches(matches_left - matches_subtract);
            if (!this.game_over()) {
                this.switch_player();
                this.computer_move();
            }
        }
        this.render_frontend(req, res, router);
    }
    computer_move() {
        let matches_left = this.game.getNumberOfMatches();
        let matches_take_away;
        switch (matches_left % 4) {
            case 0:
                matches_take_away = 3;
                break;
            case 1:
                matches_take_away = this.calculate_random_number(1, 3);
                break;
            case 2:
                matches_take_away = 1;
                break;
            case 3:
                matches_take_away = 2;
                break;
        }
        this.game.setNumberOfMatches(matches_left - matches_take_away);
        this.last_computer_move = matches_take_away;
    }
    game_over() {
        if (this.game.getNumberOfMatches() <= 0) {
            return true;
        }
        return false;
    }
    render_frontend(req, res, router) {
        let message;
        let options;
        if (this.game_over()) {
            if (this.current_player) {
                message = "Glückwunsch, du hast das Spiel gewonnen";
            }
            else {
                message = "Oooo, du hast verloren",
                    this.last_computer_move = 0;
            }
        }
        options = {
            "page_title": this.game.getName(),
            "matches_left": this.game.getNumberOfMatches(),
            "computer_move": this.last_computer_move,
            "message": message,
            "counter": this.counter
        };
        router.render(req, res, "game", options);
    }
    calculate_random_number(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
}
exports.MatchesController = MatchesController;
