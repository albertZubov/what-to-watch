import React from 'react'
import { Link } from 'react-router-dom'

const ButtonAddReview = ({ id }: { id: number }) => {
	return (
		<Link to={`/films/${id}/review`} className='btn film-card__button'>
			Add review
		</Link>
	)
}

export default ButtonAddReview
