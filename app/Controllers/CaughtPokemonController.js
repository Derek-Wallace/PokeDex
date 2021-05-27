import { ProxyState } from "../AppState.js";
import { sandboxAPI } from "../Services/SandboxAPI.js";


function _draw(){
  document.getElementById('caught-pokemon').innerHTML = ProxyState.caughtPokemon.map(p => p.template).join('')
}

export class CaughtPokemonController{
  constructor(){
    ProxyState.on('caughtPokemon', _draw)
    this.getCaughtPokemon()
  }

  getCaughtPokemon(){
    sandboxAPI.getCaughtPokemon()
  }
  catchPokemon(id){
    sandboxAPI.catchPokemon(id)
  }

  deletePokemon(id){
    sandboxAPI.deletePokemon(id)
  }
}