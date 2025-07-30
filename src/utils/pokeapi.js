const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function getAllPokemons(limit = 21, offset = 0) {
    try {
        const res = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
        if (!res.ok) {
            throw new Error('Error al obtener la lista de Pokemon')
        }

        const data = await res.json();
        const pokemonList = data.results;

        const detailedPokemonList = await Promise.all(
            pokemonList.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                if (!res.ok) {
                    throw new Error(`Error al obtener datos de ${pokemon.name}`);
                }
                return await res.json();
            })
        );

        return detailedPokemonList;
    } catch (error) {
        console.error('Error en getAllPokemons:', error);
        throw error;
    }
}