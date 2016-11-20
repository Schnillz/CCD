import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { GameRoute } from "./game";

/**
 * / route
 *
 * @class IndexRoute
 */
export class IndexRoute extends BaseRoute {

private router: Router;

/**
 * Constructor
 *
 * @class GameRoute
 * @constructor
 */
  constructor(router: Router) {
    // log
    console.log("[IndexRoute::create] Creating index route.");
    super();
    this.router = router;
    this.setRoutes();
  }

  // prepare all (stateless) routes
  private setRoutes(): void{
    //add home page route
    this.router.get("/", (req: Request, res: Response, next: NextFunction) => {
      this.index(req, res, next);
    });
  }

  // no need for controller right now
  public index(req: Request, res: Response, next: NextFunction) {

    //set options
    let options: Object = {
      "message": "Das Streichholzspiel"
    };

    //render template
    this.render(req, res, "index", options);
  }
}
