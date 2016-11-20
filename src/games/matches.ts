import { Game } from "./game";
/**
 * / route
 *
 * @class MatchGame
 */
export class Matches extends Game {

  private matches_left: number;

  /**
   * Constructor
   *
   * @class MatchGame
   * @constructor
   */
  constructor(matches_left: number) {
    super("Das Streichholzspiel");
    this.matches_left = matches_left;
  }

  getNumberOfMatches(): number{
    return this.matches_left;
  }

  setNumberOfMatches(matches: number){
    this.matches_left = matches;
  }
}
