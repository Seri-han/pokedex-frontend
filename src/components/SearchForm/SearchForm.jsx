import './SearchForm.css';
import { useState } from 'react';

export default function SearchForm({ onSearch }) {
    const [input, setInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input.toLowerCase());
        }
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input
            type='text'
            className='search-form__input'
            placeholder='Busca un Pokémon por nombre'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button className='search-form__button' type='submit'>Buscar</button>
        </form>
    );
}