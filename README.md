Pokédex App

Aplicación web interactiva de Pokédex creada con React. Permite a los usuarios registrarse, iniciar sesión, gestionar su perfil y marcar Pokémon favoritos para una experiencia personalizada.
Características principales

    Listado de Pokémon: Visualización con imágenes, tipos y detalles básicos.

    Sistema de autenticación: Registro, inicio de sesión y cierre de sesión.

    Gestión de usuario: Perfil con nombre, correo y lista de Pokémon favoritos.

    Favoritos: Marcar y desmarcar Pokémon favoritos, con guardado local.

    Buscador: Filtro por nombre y tipo para facilitar la búsqueda.

    Carga progresiva: Botón “Mostrar más” para cargar más Pokémon sin afectar rendimiento.

    Validación de formularios: Validación robusta con mensajes de error claros y validación en tiempo real.

    UI/UX amigable: Diseño responsive, modales accesibles y navegación intuitiva.

Tecnologías usadas

    React (Hooks, Router)

    JavaScript (ES6+)

    CSS3 (modular, BEM)

    PokéAPI (API pública)

    LocalStorage para persistencia local de usuario y favoritos

Instalación y ejecución

    Clona el repositorio:

git clone https://github.com/TuUsuario/pokedex-app.git
cd pokedex-app

    Instala dependencias:

npm install

    Ejecuta la aplicación en modo desarrollo:

npm start

    La aplicación estará disponible en http://localhost:3000

Estructura del proyecto

    /src/components: Componentes reutilizables (Cards, Modals, Navbar, Profile, etc.)

    /src/pages: Vistas principales (Main, About, Login, Register, Profile)

    /src/api: Funciones para consumir PokéAPI

    /src/styles: Archivos CSS modulares

    App.jsx: Configuración principal de rutas, estado global y manejo de autenticación

Uso

    Al ingresar, puedes navegar la lista inicial de Pokémon.

    Para marcar favoritos, debes iniciar sesión o registrarte.

    El perfil guarda tu información y muestra tus Pokémon favoritos con opción a eliminar.

    Utiliza el buscador para filtrar Pokémon por nombre o tipo.

    Carga más Pokémon con el botón “Mostrar más”.

    Puedes cerrar sesión en cualquier momento desde el perfil o navegación.

Validaciones

    Registro: Campos obligatorios, verificación de email válido, contraseña segura (mínimo 8 caracteres, al menos una mayúscula y un número), confirmación de contraseña.

    Login: Email válido y contraseña con longitud mínima.

    Mensajes de error en tiempo real y bloqueo de envío si hay errores.

Mejoras futuras

    Autenticación segura con backend y JWT.

    Guardado de favoritos en base de datos en lugar de localStorage.

    Visualización detallada con estadísticas y movimientos de Pokémon.

    Mejoras de accesibilidad.

    Despliegue en servidor cloud.

Autor

Sarah Handal – [GitHub](https://github.com/Seri-han)