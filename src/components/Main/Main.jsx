import { useEffect, useState } from "react";
import "./Main.css";
import PokemonList from "../PokemonList/PokemonList";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { getAllPokemons } from "../../utils/pokeapi";

function Main({ isLoggedIn, onRequestLogin }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [visibleCount, setVisibleCount] = useState(20);
const [searchQuery, setSearchQuery] = useState("");

  function handleShowMore() {
    setVisibleCount((prev) => prev + 20);
  }

  function handleLike(pokemonName) {
    if (!isLoggedIn) {
      onRequestLogin();
      return;
    }

    if (favorites.includes(pokemonName)) {
      setFavorites(favorites.filter((name) => name !== pokemonName));
    } else {
      setFavorites([...favorites, pokemonName]);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllPokemons();
        setPokemons(data);
      } catch (err) {
        console.error("Error fetching pokemons", err);
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
<PokemonList
  // pokemons={pokemons.slice(0, visibleCount)}
  pokemons={visiblePokemons}
  onCardClick={handleCardClick}
  onLike={handleLike}
  favorites={favorites}
  isLoggedIn={isLoggedIn}
/>
      )}
      {visibleCount < pokemons.length && (
  <button className="main__show-more-button" onClick={handleShowMore}>
    Mostrar más
  </button>
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
