import './PokemonList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function PokemonList({ pokemons }) {
    return (
        <section className='pokemon-list'>
            {pokemons.map((pokemon) => (
                <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                type={pokemon.types}
                />
            ))}
        </section>
    );
}