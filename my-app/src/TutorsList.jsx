import PropTypes from 'prop-types';

const TutorsList = ({ elemente }) => {
    return(
        <div>
            <ul>
                {elemente.map( el => {
                    return(
                        <li key={el.phone}>
                          {`${el.firstName} ${el.lastName} ${'|'} ${el.phone} ${'|'} ${el.email}`}
                        </li>
                    )
                    
                } )}
            </ul>
        </div>
    )
}

TutorsList.propTypes = {
    elemente: PropTypes.array,
}

export default TutorsList;
