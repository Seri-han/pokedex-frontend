import './Profile.css';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function Profile({ user, favorites, onRemoveFavorite, onLogout }) {
  return (
    <div className='profile'>
      <h2 className='profile__title'>Mi Perfil</h2>
      <p><strong>Nombre:</strong> {user?.firstName} {user?.lastName}</p>
      <p><strong>Correo:</strong> {user?.email}</p>

      <h3>Pokémones favoritos:</h3>
      {favorites.length > 0 ? (
        <div className="profile__cards">
          {favorites.map(p => (
            <PokemonCard
              key={p.id}
              name={p.name}
              image={p.sprites.front_default}
              types={p.types}
              onClick={()=>{}}
              isFavorite={true}
              onLike={() => onRemoveFavorite(p.name)}
              isLoggedIn
            />
          ))}
        </div>
      ) : (
        <p>Aún no tienes favoritos.</p>
      )}

      <button onClick={onLogout} className='profile__logout-btn'>Cerrar sesión</button>
    </div>
  );
}
