"use strict";
class GameController {
    constructor() {
        this.current_player = true;
    }
    switch_player() {
        this.current_player = !this.current_player;
    }
}
exports.GameController = GameController;
