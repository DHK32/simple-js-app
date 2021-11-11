// Pokemon List
let typeArray= ['Grass', 'Poison', 'Fire', 'Water', 'Flying', 'Electric', 'Bug', 'Dark'];

// Create Objects to store in the array.
  let pokemonList1 = {
    name: 'Fearow',
    height: 1.2,
    types: typeArray,
    type1: 5

  };

  let pokemonList2 = {
    name: 'Rapidash',
    height: 1.7,
    types: typeArray,
    type1: 3
  };

  let pokemonList3 = {
    name: 'Sharpedo',
    height: 1.8,
    types: typeArray,
    type1: 4,
    type2: 8
  };

  let pokemonList4 = {
    name: 'Yanmega',
    height: 1.9,
    types: typeArray,
    type1: 7
  };

let pokemonList= [pokemonList1, pokemonList2, pokemonList3, pokemonList4];

function displayCards(){
  for( let i=0; i < pokemonList.length; i++){
      console.log('Name: ' + pokemonList[i].name);
      console.log('Height: ' + pokemonList[i].height);
      console.log('Type: ' + pokemonList[i].types[pokemonList[i].type1]);
      // If the 2nd type is not null
      if(pokemonList[i].type2 > 0) {
        console.log('Type: ' + pokemonList[i].types[pokemonList[i].type2]);
      }
  }
}
displayCards();
