"use strict";
class GameController {
    constructor() {
        this.current_player = true;
        this.counter = 1;
    }
    switch_player() {
        this.current_player = !this.current_player;
    }
}
exports.GameController = GameController;
