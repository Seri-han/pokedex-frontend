import './PokemonList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function PokemonList({ pokemons, onCardClick, onLike, favorites, isLoggedIn }) {
  return (
    <section className='pokemon-list'>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other['official-artwork'].front_default}
          types={pokemon.types}
          onClick={() => onCardClick(pokemon)}
          isFavorite={favorites.includes(pokemon.name)}
          onLike={onLike}
          isLoggedIn={isLoggedIn}
        />
      ))}
    </section>
  );
}
