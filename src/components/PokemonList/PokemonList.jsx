import "./PokemonList.css";
import PokemonCard from "../PokemonCard/PokemonCard";

export default function PokemonList({ pokemons, onCardClick }) {
  return (
    <section className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other["official-artwork"].front_default}
          types={pokemon.types}
          onClick={() => onCardClick(pokemon)}
          type={pokemon.types}
        />
      ))}
    </section>
  );
}
