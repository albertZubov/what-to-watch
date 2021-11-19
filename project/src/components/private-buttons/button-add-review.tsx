import React from 'react'
import { Link } from 'react-router-dom'

const ButtonAddReview = ({ id }: { id: number }) => {
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

export default ButtonAddReview
