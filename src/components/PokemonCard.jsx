function PokemonCard() {
  const pokemon = pokemonList[0];
  return (
    <figure>
      <img src={pokemon.imgSrc} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

// Reprendre cette ligne pour exo 4 https://odyssey.wildcodeschool.com/quests/2336
// return <p>{weather === "sunny" ? "☀️" : "☁️"}</p>;
