import React from 'react'
import { getRatingTitle } from '../../utils/utils'
import { FilmType } from '../../types/types'

const CardTabOverview = ({ film }: { film: FilmType }) => {
	const { rating, scoresCount, description, director, starring } = film
	const starringToString = starring.join(', ')

	return (
		<React.Fragment>
			<div className='film-rating'>
				<div className='film-rating__score'>{rating}</div>
				<p className='film-rating__meta'>
					<span className='film-rating__level'>
						{getRatingTitle(Math.round(rating))}
					</span>
					<span className='film-rating__count'>{scoresCount} ratings</span>
				</p>
			</div>

			<div className='film-card__text'>
				<p>{description}</p>

				<p className='film-card__director'>
					<strong>Director: {director}</strong>
				</p>

				<p className='film-card__starring'>
					<strong>Starring: {starringToString} and other</strong>
				</p>
			</div>
		</React.Fragment>
	)
}

export default CardTabOverview
