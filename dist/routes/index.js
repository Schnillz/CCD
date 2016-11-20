"use strict";
const route_1 = require("./route");
class IndexRoute extends route_1.BaseRoute {
    constructor() {
        super();
    }
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    index(req, res, next) {
        let options = {
            "message": "Das Streichholzspiel"
        };
        this.render(req, res, "index", options);
    }
}
exports.IndexRoute = IndexRoute;
