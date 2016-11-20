import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { Game } from "../games/game";
import { Matches } from "../games/matches";

/**
 * / route
 *
 * @class GameRoute
 */
export class GameRoute extends BaseRoute {

  private game: Game;

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[GameRoute::create] Creating game route.");

    //add home page route
    router.get("/game", (req: Request, res: Response, next: NextFunction) => {
      if( req.body.which_player === undefined || req.body.number_matches == undefined){
        res.redirect("/");
      }
      new GameRoute().index(req, res, next);
    });

    router.post('/game', (req: Request, res: Response, next: NextFunction) =>{
      if( req.body.which_player === undefined || req.body.number_matches == undefined){
        res.redirect("/");
      }
      new GameRoute().index(req, res, next);
    })

  }

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {

    super();
  }

  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {

    //set options
    let options: Object = {
      "page_title": "Das Streichholzspiel",
      "which_player": req.body.which_player,
      "matches_left": req.body.number_matches
    };

    //render template
    this.render(req, res, "game", options);
  }
}
