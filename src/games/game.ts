
/**
 * / route
 *
 * @class MatchGame
 */
export abstract class Game {

  private name: String;

  /**
   * Constructor
   *
   * @class Game
   * @constructor
   */
  constructor(name: String) {
    this.name = name;
  }

  public getName(): String{
    return this.name;
  }

}
