import PropTypes from'prop-types';

const Button3 = ({ text, icon, handleClick }) => {
    return(
        <div>
            <button onClick={handleClick}>
                {text} {icon} {'!'}
            </button>
        </div>
    )
}

Button3.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default Button3;