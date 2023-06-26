const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

/* const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
console.log(bListPkmn); */

const pkmnIds = pokemon.map( p => p.id )
/* console.log(pkmnIds); */

//id divisible por 3
const idivs = pkmnIds.filter( id => id % 3 === 0 );
console.log(idivs);

//tipo fuego
const firepkm = pokemon.filter( p => p.types.includes("fire") );
console.log(firepkm);

//mas de 1 tipo
const multipletype = pokemon.filter( p => p.types.length > 1);
console.log(multipletype);

//solo nombres de los pokemon
const pkname = pokemon.map (p => p.name);
console.log(pkname);

//solo nombre y id > 99
const pknameid = pokemon.map (p => p.id > 99 ? p.name : "" ).filter((name) => name !== "");
console.log(pknameid);

//solo nombre de los tipo veneno
const pknamepoison = pokemon.filter( p => p.types.includes("poison")).map( p => p.name);
console.log(pknamepoison);

//tipo de los que el segundo tipo es volador
const firstTypesFlying = pokemon.filter(poke => poke.types.length > 1 && poke.types[1] === "flying").map(poke => poke.types[0]);
console.log(firstTypesFlying);

//recuento de los que son tipo normal
const normaltype = pokemon.filter(p => p.types.includes("normal")).length;
console.log(normaltype);