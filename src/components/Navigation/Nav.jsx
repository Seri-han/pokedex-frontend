import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <NavLink to='/' className='navigation__link'>Inicio</NavLink>
            <NavLink to='/pokedex' className='navigation__link'>Pokédex</NavLink>
            <NavLink to='/about' className='navigation__link'>Acerca</NavLink>
        </nav>
    );
}