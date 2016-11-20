"use strict";
const route_1 = require("./route");
class IndexRoute extends route_1.BaseRoute {
    constructor(router) {
        console.log("[IndexRoute::create] Creating index route.");
        super();
        this.router = router;
        this.setRoutes();
    }
    setRoutes() {
        this.router.get("/", (req, res, next) => {
            this.index(req, res, next);
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
