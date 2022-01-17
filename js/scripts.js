// Pokemon List
let typeArray= ['','Grass', 'Poison', 'Fire', 'Water', 'Flying', 'Electric', 'Bug', 'Dark'];

// Create Objects to store in the array.
let pokemonList= [
  {
    name: 'Fearow',
    height: 1.2,
    types: typeArray,
    type1: 5
  },
  {
    name:'Rapidash',
    height: 1.7,
    types: typeArray,
    type1: 3
  },
  {
    name: 'Sharpedo',
    height: 1.8,
    types: typeArray,
    type1: 4,
    type2: 8
  },
  {
    name: 'Yanmega',
    height: 1.9,
    types: typeArray,
    type1: 7
  }
];




  for( let i=0; i < pokemonList.length; i++){
      document.write("<div class='card'>");
      document.write('<p>Name: ' + pokemonList[i].name + '</p>');
      document.write('<p>Height: ' + pokemonList[i].height + '</p>');
      // If the pokemon is taller than 1.5, then they are tall
      if (pokemonList[i].height > 1.5) {
        document.write("You're tall!");
      }
      document.write('<p>Type: ' + pokemonList[i].types[pokemonList[i].type1]+ '</p>');
      // If the 2nd type is not null or is not empty
      if(pokemonList[i].type2 > 0) {
        document.write('Type: ' + pokemonList[i].types[pokemonList[i].type2]+ '</p>');
        }
        document.write("</div>");
      }
