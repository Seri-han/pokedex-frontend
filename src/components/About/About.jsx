import './About.css';

export default function About() {
  return (
    <section className="about">
      <h1>Sobre este proyecto</h1>
      <p>
        Este proyecto es una Pokédex interactiva creada como parte de un bootcamp de desarrollo Full Stack. 
        Utiliza la <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a> para mostrar datos detallados de los Pokémon, incluyendo su tipo, habilidades, peso, y más.
      </p>
      <p>
        La aplicación incluye funcionalidades de autenticación, permitiendo a los usuarios registrarse, iniciar sesión, y crear su propio equipo Pokémon con favoritos personalizados.
        Además, tiene un perfil donde los usuarios pueden ver su información y administrar sus Pokémon favoritos.
      </p>
      <p>
        Técnicamente, este proyecto fue construido con React para el frontend, y se practica la gestión del estado usando hooks, almacenamiento local para persistencia simple, y diseño responsivo con CSS moderno.
      </p>
      <p>
        El objetivo es demostrar competencias en desarrollo web moderno, integración de APIs externas, manejo de estados, modales para formularios de login y registro, y una experiencia de usuario fluida y agradable.
      </p>
      <p>
        ¡Espero que disfrutes explorando esta Pokédex tanto como yo disfruté desarrollándola!
      </p>
    </section>
  );
}
