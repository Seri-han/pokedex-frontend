import { useEffect, useState } from "react";
import './Main.css';
import PokemonList from '../PokemonList/PokemonList';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { getAllPokemons } from '../../utils/pokeapi';

function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
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

  function handleCardClick(pokemon) {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  }

  function closeModal() {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  }

  return (
    <main className="main">
      <h1 className="main__title">Mi Equipo Pokémon</h1>
      {loading ? (
        <p className="main__loading">Cargando Pokémon...</p>
      ) : (
        <PokemonList pokemons={pokemons} onCardClick={handleCardClick} />
      )}
      <ModalWithForm
        isOpen={isModalOpen}
        onClose={closeModal}
        pokemon={selectedPokemon}
      />
    </main>
  );
}

export default Main;
