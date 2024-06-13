import PropTypes from "prop-types";

export default function Navigate({
  setPokemonIndex,
  pokemonList,
  pokemonIndex,
}) {
  const HandleClickPrevious = () => setPokemonIndex(pokemonIndex - 1);
  const HandleClickNext = () => setPokemonIndex(pokemonIndex + 1);
  return (
    <>
      {pokemonIndex > 0 ? (
        <button onClick={HandleClickPrevious}>Précédent</button>
      ) : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={HandleClickNext}>Suivant</button>
      ) : null}
    </>
  );
}

Navigate.propTypes = {
  setPokemonIndex: PropTypes.func,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.array.isRequired,
};
