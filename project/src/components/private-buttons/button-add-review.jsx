import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ButtonAddReview = ({ id }) => {
	return (
		<Link
			to={`/films/${id}/review`}
			href='add-review.html'
			className='btn film-card__button'
		>
			Add review
		</Link>
	)
}

ButtonAddReview.propTypes = {
	id: PropTypes.number.isRequired,
}

export default ButtonAddReview
