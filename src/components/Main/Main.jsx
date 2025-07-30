import { useEffect, useState } from "react";
import './Main.css';
import PokemonList from '../PokemonList/PokemonList';
import { getAllPokemons } from '../../utils/pokeapi'

function Main() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        async function fetchData() {
            try {
                const data = await getAllPokemons();
                setPokemons(data);
            } catch (err) {
                console.error('Error fetching pokemons', err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <main className="main">
            <h1 className="main__title">
Mi Equipo Pokémon
            </h1>
            {loading ? <p className="main__loading"> Cargando Pokémon...</p> : <PokemonList pokemons={pokemons}/>}
        </main>
    );
}
export default Main;