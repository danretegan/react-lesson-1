import PropTypes from 'prop-types';

const TutorsList = ({ elemente }) => {
    return(
        <div>
            <ul>
                {elemente.map( element => {
                    return(
                        <li key={element.phone}>
                          {`${element.firstName} ${element.lastName} ${'|'} ${element.phone} ${'|'} ${element.email}`}
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
