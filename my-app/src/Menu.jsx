import PropTypes from 'prop-types';

const Menu = ({ elemente }) => {
    return (
        <div>
            <ul>
              {elemente.map( element => {
                return(
                        <li key={element.id}>
                    {element.name}
                        </li>
                       )
              })}
            </ul>
        </div>
    )
}

Menu.propTypes = {
    elemente: PropTypes.array,
}

export default Menu;
