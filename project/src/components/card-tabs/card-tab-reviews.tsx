import React from 'react'
import PropTypes from 'prop-types'
import { getDate } from '../../utils/utils'
import { commentType } from '../../types/types'

const CardTabReviews = ({ comments }: { comments: Array<commentType> }) => {
	return (
		<div className='film-card__reviews film-card__row'>
			<div className='film-card__reviews-col'>
				{comments.map((el) => {
					const { month, dayPresent, year } = getDate(el.date)
					return (
						<div className='review' key={el.id}>
							<blockquote className='review__quote'>
								<p className='review__text'>{el.comment}</p>
								<footer className='review__details'>
									<cite className='review__author'>{el.user.name}</cite>
									<time className='review__date' dateTime='2016-12-24'>
										{month} {dayPresent}, {year}
									</time>
								</footer>
							</blockquote>

							<div className='review__rating'>{el.rating}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default CardTabReviews
