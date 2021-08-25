import React from 'react'
import PropTypes from 'prop-types'
import { propFilm } from '../../props/props'
import { getRatingTitle } from '../../utils/utils'

const CardTabOverview = ({ film }) => {
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

CardTabOverview.propTypes = {
	film: PropTypes.shape(propFilm),
}

export default CardTabOverview
