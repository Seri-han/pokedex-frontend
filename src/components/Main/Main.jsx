/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Main.css";
import PokemonList from "../PokemonList/PokemonList";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { getAllPokemons } from "../../utils/pokeapi";

export default function Main({ isLoggedIn, onRequestLogin, favorites, setFavorites, pokemons, setPokemons }) {
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllPokemons(1025, 0);
        setPokemons(data);
      } catch (err) {
        console.error("Error fetching pokemons", err);
      } finally {
        setLoading(false);
      }
    }

    if (pokemons.length === 0) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  function handleCardClick(pokemon) {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  }

  function closeModal() {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  }

  function handleLike(name) {
    if (!isLoggedIn) {
      onRequestLogin();
      return;
    }
    const updated = favorites.includes(name)
      ? favorites.filter(n => n !== name)
      : [...favorites, name];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visiblePokemons = filteredPokemons.slice(0, visibleCount);

  return (
    <main className="main">
      <h1 className="main__title">Pokédex</h1>

      <input
        className="main__search"
        type="text"
        placeholder="Buscar Pokémon por nombre..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {loading ? (
        <p className="main__loading">Cargando Pokémon...</p>
      ) : (
        <>
          <PokemonList
            pokemons={visiblePokemons}
            onCardClick={handleCardClick}
            onLike={handleLike}
            favorites={favorites}
            isLoggedIn={isLoggedIn}
          />

          {visibleCount < filteredPokemons.length && (
            <button className="main__show-more-button" onClick={() => setVisibleCount(prev => prev + 20)}>
              Mostrar más
            </button>
          )}
        </>
      )}

      <ModalWithForm
        isOpen={isModalOpen}
        onClose={closeModal}
        pokemon={selectedPokemon}
      />
    </main>
  );
}
