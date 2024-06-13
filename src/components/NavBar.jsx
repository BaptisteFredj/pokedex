import PropTypes from "prop-types";

export default function Navigate({ setPokemonIndex, pokemonList }) {
  const HandleClickPkmn = (index) => () => setPokemonIndex(index);

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button onClick={HandleClickPkmn(index)} key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

Navigate.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.array.isRequired,
};
