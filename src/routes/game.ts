import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { GameController } from "../games/game.controller";
import { MatchesController } from "../games/matches.controller";
import { Matches } from "../games/matches";

/**
 * / route
 *
 * @class GameRoute
 */
export class GameRoute extends BaseRoute {

    private router: Router;
    private gameController: GameController;

    /**
     * Constructor
     *
     * @class GameRoute
     * @constructor
     */
    constructor(router: Router) {
        // log
        console.log("[GameRoute::create] Creating game route.");
        super();
        this.router = router;
        this.gameController = new MatchesController();
        this.setRoutes();
    }

    // prepare all (stateless) routes
    private setRoutes(): void {
        // if no post params redirect to index
        this.router.all('/matches', (req: Request, res: Response, next: NextFunction) => {
            if (req.body === undefined) res.redirect("/");
            next();
        })
        // receive post requests from views
        this.router.post('/matches', (req: Request, res: Response, next: NextFunction) => {
            // check who is caller
            if(req.body.number_matches !== undefined){
              this.gameController.start_game(req, res);
            }else{
              this.gameController.continue_game(req, res);
            }
        })
    }
}
