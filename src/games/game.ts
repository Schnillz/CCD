
/**
 * / route
 *
 * @class MatchGame
 */
export abstract class Game {

  private name: String;
  private message: String;
  protected current_player: boolean;

  /**
   * Constructor
   *
   * @class Game
   * @constructor
   */
  constructor(name: String, message: String, player: boolean ) {
    this.name = name;
    this.message = message;
    this.current_player = player;
  }

}
