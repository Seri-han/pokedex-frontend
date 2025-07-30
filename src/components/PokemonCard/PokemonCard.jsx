import './PokemonCard.css';

function PokemonCard({ name, image, types, onClick }) {
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
    </div>
  );
}


export default PokemonCard;