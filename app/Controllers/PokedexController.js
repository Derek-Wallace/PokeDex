import { ProxyState } from "../AppState.js";
import { pokeAPIService } from "../Services/PokeAPServiceI.js";



function _drawInfo(){
  document.getElementById('pokedex').innerHTML = ProxyState.pokemonInfo.map(p => p.template).join('')
}

export class PokedexController{

  constructor(){
    ProxyState.on('pokedex', this.getPokemonInfo)
    ProxyState.on('pokemonInfo', _drawInfo)
    this.getPokedex()
  }

  getPokedex(){
    pokeAPIService.getPokedex()
  }

  drawDetails(id){
    let pokemon = ProxyState.pokemonInfo.find(p => p.id == id)
    console.log(pokemon)
    document.getElementById('details').innerHTML = pokemon.detailsTemplate

  }

  getPokemonInfo(){
    for(let i = 0; i < ProxyState.pokedex.length; i++){
      pokeAPIService.getPokemonInfo(i)
    }
  }
}