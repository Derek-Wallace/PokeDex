import { CaughtPokemonController } from "./Controllers/CaughtPokemonController.js";
import { PokedexController } from "./Controllers/PokedexController.js";



class App {
  pokedexController = new PokedexController()
  caughtPokemonController = new CaughtPokemonController()
}

window["app"] = new App();
