import { ProxyState } from "../AppState.js"
import { Pokedex } from "../Models/Pokedex.js"
import { PokemonInfo } from "../Models/PokemonInfo.js"

let Poke = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

class PokeAPIService{
  async getPokedex(){
    let res = await Poke.get('?offset=0&limit=151')
    ProxyState.pokedex = res.data.results.map(p => new Pokedex(p))
  }

  async getPokemonInfo(p){
    let pokeUrl = p + 1
    let res = await Poke.get(`${pokeUrl}`)
    ProxyState.pokemonInfo = [...ProxyState.pokemonInfo, new PokemonInfo(res.data)]
  }
}

export const pokeAPIService = new PokeAPIService()