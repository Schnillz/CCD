"use strict";
const route_1 = require("./route");
class GameRoute extends route_1.BaseRoute {
    constructor() {
        super();
    }
    static create(router) {
        console.log("[GameRoute::create] Creating game route.");
        router.get("/game", (req, res, next) => {
            if (req.body.which_player === undefined || req.body.number_matches == undefined) {
                res.redirect("/");
            }
            new GameRoute().index(req, res, next);
        });
        router.post('/game', (req, res, next) => {
            if (req.body.which_player === undefined || req.body.number_matches == undefined) {
                res.redirect("/");
            }
            new GameRoute().index(req, res, next);
        });
    }
    index(req, res, next) {
        let options = {
            "page_title": "Das Streichholzspiel",
            "which_player": req.body.which_player,
            "matches_left": req.body.number_matches
        };
        this.render(req, res, "game", options);
    }
}
exports.GameRoute = GameRoute;
