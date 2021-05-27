export class PokemonInfo{
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.sprite = data.sprites.front_default
    this.height = data.height
    this.weight = data.weight
    this.types = data.types
    this.abilities = data.abilities
  }

  get template(){
    return `
    <div class="row" role="button" onclick="app.pokedexController.drawDetails('${this.id}')">
    <div class="col-4 my-1"><image src="${this.sprite}" height="50px"/></div>
    <div class="col-8 my-1 pl-4">${this.name}</div>
    </div>
    `
  }

  get detailsTemplate(){
    let types = ''
    this.types.forEach(t => types+= t.type.name + " "  )
    return `
    <div class="d-flex justify-content-center mt-5">
      <div>
        <img src="${this.sprite}" height="150px">
        <h5>${this.name.toUpperCase()}</h5>
        <small>Pokedex Number: ${this.id}</small>
        <h5>Types: ${types}</h5>
        <ul style="list-style-type:none;" class="mt-1">
          <li>Height: ${this.height}</li>
          <li>Weight: ${this.weight}</li>
        </ul>
        <h5>Abilities</h5>
        <ul style="list-style-type:none;" class="mt-1">
          <li>${this.abilities[0].ability.name}</li>
          <li>${this.abilities[1].ability.name}</li>
        </ul>
        <button class="btn btn-success" onclick="app.caughtPokemonController.catchPokemon('${this.id}')">Catch</button>
      </div>
    </div>
    `
  }
}