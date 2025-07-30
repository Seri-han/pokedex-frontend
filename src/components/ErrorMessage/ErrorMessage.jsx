import './ErrorMessage.css';

export default function ErrorMessage({ message }) {
    return (
        <div className='error-message'>
            <p className='error-message__text'>{message || 'Ocurrió un error al cargar los datos'}</p>
        </div>
    );
}