import { ProxyState } from "../AppState.js"
import { CaughtPokemon } from "../Models/CaughtPokemon.js"

const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class SandboxAPI{
  async getCaughtPokemon(){
    let res = await sandbox.get('connor/pokemon')
    console.log(res.data)
    ProxyState.caughtPokemon = res.data.map(p => new CaughtPokemon(p))
  }

  async catchPokemon(id){
    let pokemon = ProxyState.pokemonInfo.find(p => p.id == id)
    pokemon = new CaughtPokemon(pokemon)
    if(ProxyState.caughtPokemon.length >= 10){
      throw new Error("You must release a pokemon to catch this pokemon")
    }
    let res = await sandbox.post('connor/pokemon', pokemon)
    ProxyState.caughtPokemon = [...ProxyState.caughtPokemon, new CaughtPokemon(res.data)]
  }

  async deletePokemon(id){
    await sandbox.delete('connor/pokemon/' + id)
    ProxyState.caughtPokemon = ProxyState.caughtPokemon.filter(p => p.id != id)
  }

}

export const sandboxAPI = new SandboxAPI()