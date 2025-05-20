import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CommonHedding = ({ FastPart, SecondPart, PageLink }) => {
    return (
        <div className='font-bold text-2xl mb-3'>
            <Link to={PageLink}>
                <span className='dark:text-White_Color'>{FastPart}</span>
                <span className='text-Blue_color'>{SecondPart}</span>
            </Link>
        </div>
    )
}

CommonHedding.propTypes = {
    FastPart: PropTypes.string.isRequired,
    SecondPart: PropTypes.string,
    PageLink: PropTypes.string,
}

export default CommonHedding
