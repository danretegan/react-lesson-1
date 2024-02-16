import PropTypes from 'prop-types';

const Button1 = ({ clickProp }) => {
    return(
        <div>
            <button onClick={clickProp}>Click button 1!</button>
        </div>
    )
}

Button1.propTypes = {
    clickProp: PropTypes.func,
}

export default Button1;
