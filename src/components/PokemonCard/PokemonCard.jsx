import './PokemonCard.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function PokemonCard({ name, image, types, onClick, isFavorite, onLike }) {
  return (
    <div className='pokemon-card' onClick={onClick}>
      <img className='pokemon-card__image' src={image} alt={name} />
      <h2 className='pokemon-card__name'>{name}</h2>
      <div className='pokemon-card__types'>
        {types.map((typeObj) => (
          <span key={typeObj.type.name} className={`pokemon-card__type pokemon-card__type--${typeObj.type.name}`}>
            {typeObj.type.name}
          </span>
        ))}
      </div>
<button
  className='pokemon-card__like-button'
  onClick={(e) => {
    e.stopPropagation();
    onLike(name);
  }}
>
  {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
</button>

      
    </div>
  );
}

export default PokemonCard;
