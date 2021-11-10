// Pokemon List
let pokemonList= [];
let typeArray= ['grass', 'poison', 'fire', 'water', 'flying', 'electric', 'bug', 'dark'];

function pokemon (name, height, type1, type2= 0){
  this.name= name;
  this.height= height;
  this.types= typeArray;
  this.typePosition1= type1;
  this.typePosition2= type2;
}

// Create Objects to store in the array.
  pokemonList[0]= new pokemon();
  pokemonList[0].name= 'Fearow';
  pokemonList[0].height= 1.2;
  pokemonList[0].type1= 5;

  pokemonList[1]= new pokemon();
  pokemonList[1].name= 'Rapidash';
  pokemonList[1].height= 1.7;
  pokemonList[1].type1= 3;

  pokemonList[2]= new pokemon();
  pokemonList[2].name= 'Sharpedo';
  pokemonList[2].height= 1.8;
  pokemonList[2].type1= 4;
  pokemonList[2].type2= 8;

  pokemonList[3]= new pokemon();
  pokemonList[3].name= 'Yanmega';
  pokemonList[3].height= 1.9;
  pokemonList[3].type1= 7;

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
