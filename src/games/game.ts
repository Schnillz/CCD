
/**
 *
 * @class Game
 */
export abstract class Game {

  private name: String;

  /**
   * / model
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
