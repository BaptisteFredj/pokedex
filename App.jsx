import { useState } from "react";
import MyTitle from "./src/components/MyTitle";
import PokemonCard from "./src/components/PokemonCard";
import Navigate from "./src/components/NavBar";

export default function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <Navigate
          setPokemonIndex={setPokemonIndex}
          pokemonList={pokemonList}
          pokemonIndex={pokemonIndex}
        />
      </div>
    </>
  );
}

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
