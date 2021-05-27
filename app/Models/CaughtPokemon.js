export class CaughtPokemon{
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.img = data.sprite || data.img
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }

  get template(){
    return `
    <div class="col-4 my-1"><image src="${this.img}" height="50px"/></div>
    <div class="col-8 my-1 pl-4">${this.name} <i role="button" class="text-danger mdi mdi-trash-can" onclick="app.caughtPokemonController.deletePokemon('${this.id}')"></i></div>
    `
  }
}