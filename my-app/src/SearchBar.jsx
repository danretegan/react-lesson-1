import PropTypes from 'prop-types';

function SearchBar({ text, esteVizibil, pret }) {
    return(
        <div>
            {esteVizibil ? 'Conditia este adevarata, afisez textul!' : ''}
            {text.length > 10 && <p>Textul este mai lung de 10 caractere!</p>}
            <h2>{text}</h2>
            <h3>{pret}</h3>
        </div>
    )
}

SearchBar.propTypes = {
    text: PropTypes.string.isRequired,
    esteVizibil: PropTypes.bool,
    pret: PropTypes.number.isRequired,
}

export default SearchBar;
