import { useState } from "react";
import MyTitle from "./src/components/MyTitle";
import PokemonCard from "./src/components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {pokemonIndex > 0 ? (
          <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>
            Précédent
          </button>
        ) : null}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>
            Suivant
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
