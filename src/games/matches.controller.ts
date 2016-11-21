import { NextFunction, Request, Response} from "express";
import { GameRoute } from "../routes/game";
import { Matches } from "./matches";
import { GameController } from "./game.controller"

/**
 * holds gamestate and offers methods to play the match game
 *
 * @class MatchesController
 */
export class MatchesController extends GameController {

    private game: Matches; // current_game
    private last_computer_move: number = 0;

    /**
     * / controller
     *
     * @class MatchesController
     */
    constructor() {
        super();
    }

    // gets called once a game is started from index
    public start_game(req: Request, res: Response, router: GameRoute): void {

        let start_player = req.body.start_player;
        let number_matches = req.body.number_matches;

        // create new Matches Game
        this.game = new Matches(number_matches);
        // start counter
        this.counter = 1;
        if (start_player === "B") {
            this.computer_move();
        }
        // show game in frontend
        this.render_frontend(req, res, router);
    }

    // gets called after each post request when game is running
    public continue_game(req: Request, res: Response, router: GameRoute): void {

        let matches_subtract = +req.body.matches_subtract;
        let matches_left = this.game.getNumberOfMatches();

        // prevent action if page just reloaded
        if( !isNaN(matches_subtract) ){
          // increase game counter
          this.counter++;
          // make move of Player A
          this.game.setNumberOfMatches(matches_left - matches_subtract);
          // check if game over
          if (!this.game_over()) {
              this.switch_player();
              this.computer_move();
          }
        }
        // show game in frontend
        this.render_frontend(req, res, router);
    }

    // implements winner strategy of computer
    private computer_move(): void {

        let matches_left = this.game.getNumberOfMatches();
        let matches_take_away;

        // compare
        // if x % 4 != 1 we have a winning strategy
        switch (matches_left % 4) {
            case 0:
                matches_take_away = 3;
                break;
            // no winning strategy ;(
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

    // check if the game is over
    private game_over(): boolean {

        if (this.game.getNumberOfMatches() <= 0) {
            return true;
        }
        return false
    }

    // render view after each round with updated optionset
    private render_frontend(req: Request, res: Response, router: GameRoute): void {

        let message;
        let options;

        // check again after computer had her turn
        if (this.game_over()) {
            if (this.current_player) {
                message = "Glückwunsch, du hast das Spiel gewonnen";
            } else {
                message = "Oooo, du hast verloren",
                    this.last_computer_move = 0
            }
        }
        // set options for view_engine
        options = {
            "page_title": this.game.getName(),
            "matches_left": this.game.getNumberOfMatches(),
            "computer_move": this.last_computer_move,
            "message": message,
            "counter": this.counter
        };

        // render template
        router.render(req, res, "game", options);
    }

    private calculate_random_number(min: number, max: number): number {
        return Math.floor(Math.random() * max) + min;
    }

}
