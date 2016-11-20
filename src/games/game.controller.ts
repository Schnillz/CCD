import { NextFunction, Request, Response} from "express";
import { BaseRoute } from "../routes/route";

/**
 * / route
 *
 * @class GameController
 */
export abstract class GameController {

  public counter: number; // count rounds
  protected current_player: boolean = true; //true Player A, false Player B
  protected message: String; // dynamic messaging to user

  constructor() {
    this.counter = 1;
  }

  public switch_player(): void{
      this.current_player = !this.current_player;
  }
  //start game
  abstract start_game(req: Request, res: Response, router: BaseRoute): void;
  // how to proceed
  abstract continue_game(req: Request, res: Response, router: BaseRoute): void;

}
