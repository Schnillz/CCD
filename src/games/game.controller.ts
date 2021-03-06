import { NextFunction, Request, Response} from "express";
import { BaseRoute } from "../routes/route";

/**
 * basic attributes and methods for games
 *
 * @class GameController
 */
export abstract class GameController {

  public counter: number; // count rounds
  protected current_player: boolean = true; // true Player A, false Player B
  protected message: String; // show to user

  /**
   * / controller
   *
   * @class GameController
   */
  constructor() {}

  public switch_player(): void{
      this.current_player = !this.current_player;
  }
  // gets called once a game is started from index
  abstract start_game(req: Request, res: Response): void;
  // gets called after each post request when game is running
  abstract continue_game(req: Request, res: Response): void;

}
