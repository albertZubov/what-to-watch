import React from 'react'
import { getTime } from '../../utils/utils'
import { FilmType } from '../../types/types'

const CardTabDetails = ({ film }: { film: FilmType }): JSX.Element => {
	const { released, genre, director, starring, id, runTime } = film
	const { hours, minutes } = getTime(runTime)

	return (
		<div className='film-card__text film-card__row'>
			<div className='film-card__text-col'>
				<p className='film-card__details-item'>
					<strong className='film-card__details-name'>Director</strong>
					<span className='film-card__details-value'>{director}</span>
				</p>
				<p className='film-card__details-item'>
					<strong className='film-card__details-name'>Starring</strong>
					<span className='film-card__details-value'>
						{starring.map((el) => (
							<React.Fragment key={el + id}>
								{el}, <br />
							</React.Fragment>
						))}
					</span>
				</p>
			</div>

			<div className='film-card__text-col'>
				<p className='film-card__details-item'>
					<strong className='film-card__details-name'>Run Time</strong>
					<span className='film-card__details-value'>
						{hours}h {minutes}m
					</span>
				</p>
				<p className='film-card__details-item'>
					<strong className='film-card__details-name'>Genre</strong>
					<span className='film-card__details-value'>{genre}</span>
				</p>
				<p className='film-card__details-item'>
					<strong className='film-card__details-name'>Released</strong>
					<span className='film-card__details-value'>{released}</span>
				</p>
			</div>
		</div>
	)
}

export default CardTabDetails
