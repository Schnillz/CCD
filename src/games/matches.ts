import { Game } from "./game";

/**
 *
 * @class Matches
 */
export class Matches extends Game {

  private matches_left: number;

  /**
   * / model
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
