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
  constructor(starting_player: boolean, matches_left: number) {
    super("Das Streichholzspiel", "Das Spiel beginnt", starting_player);
    this.matches_left = matches_left;
  }

  private switch_player(): void{
    this.current_player = !this.current_player;
  }

  private subtract_matches(matches: number){

    if(matches > this.matches_left){

    }else if(matches === this.matches_left){

    }else{
      this.matches_left = this.matches_left - matches;
    }

  }

}
