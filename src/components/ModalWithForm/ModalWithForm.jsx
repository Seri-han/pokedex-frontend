import './ModalWithForm.css';

function ModalWithForm({ isOpen, onClose, pokemon }) {
  if (!isOpen || !pokemon) return null;

  const { name, sprites, height, weight, abilities, types } = pokemon;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <button className="modal__close-button" onClick={onClose}>×</button>
        <img className="modal__image" src={sprites.front_default} alt={name} />
        <h2 className="modal__title">{name}</h2>

        <p><strong>Height:</strong> {height / 10} m</p>
        <p><strong>Weight:</strong> {weight / 10} kg</p>

        <div>
          <strong>Types:</strong>
          <ul className="modal__list">
            {types.map((typeObj) => (
              <li key={typeObj.type.name} className={`modal__type modal__type--${typeObj.type.name}`}>
                {typeObj.type.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <strong>Abilities:</strong>
          <ul className="modal__list">
            {abilities.map((abilityObj) => (
              <li key={abilityObj.ability.name}>{abilityObj.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
