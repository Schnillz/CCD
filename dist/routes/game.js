"use strict";
const route_1 = require("./route");
const matches_controller_1 = require("../games/matches.controller");
class GameRoute extends route_1.BaseRoute {
    constructor(router) {
        console.log("[GameRoute::create] Creating game route.");
        super();
        this.router = router;
        this.gameController = new matches_controller_1.MatchesController();
        this.setRoutes();
    }
    setRoutes() {
        this.router.all('/matches', (req, res, next) => {
            if (req.body === undefined)
                res.redirect("/");
            next();
        });
        this.router.post('/matches', (req, res, next) => {
            if (req.body.number_matches !== undefined) {
                this.gameController.start_game(req, res);
            }
            else {
                this.gameController.continue_game(req, res);
            }
        });
    }
}
exports.GameRoute = GameRoute;
