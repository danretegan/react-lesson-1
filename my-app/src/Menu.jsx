import PropTypes from 'prop-types';

const Menu = ({ elemente }) => {
    return (
        <div>
            <ul>
                <li>{elemente[0].name}</li>
                <li>{elemente[1].name}</li>
                <li>{elemente[2].name}</li>
            </ul>
        </div>
    )
}

Menu.propTypes = {
    elemente: PropTypes.array,
}

export default Menu;
