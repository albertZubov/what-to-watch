import React, { useEffect, useState } from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'
import { propFilm } from '../../props/props'
import CardTabOverview from './card-tab-overview'
import CardTabDetails from './card-tab-details'
import CardTabReviews from './card-tab-reviews'
import { commentsGet } from '../../store/api-actions.js'
import { connect } from 'react-redux'
import { getComments } from '../../store/selectors'

const TabNames = {
	OVERVIEW: 'Overview',
	DETAILS: 'Details',
	REVIEWS: 'Reviews',
}

const CardTabs = ({ film, loadComments, comments }) => {
	const [activeTabName, setActiveTabName] = useState(TabNames.OVERVIEW)

	const TabsComponents = {
		[TabNames.OVERVIEW]: <CardTabOverview film={film} />,
		[TabNames.DETAILS]: <CardTabDetails film={film} />,
		[TabNames.REVIEWS]: <CardTabReviews comments={comments} />,
	}

	useEffect(() => {
		loadComments(film.id)
	}, [])

	return (
		<>
			<nav className='film-nav film-card__nav'>
				<ul
					className='film-nav__list'
					onClick={({ target }) => {
						if (target.tagName === 'A') {
							setActiveTabName(target.textContent)
						}
					}}
				>
					{Object.values(TabNames).map((el) => (
						<li
							className={cl('film-nav__item', {
								'film-nav__item--active': el === activeTabName,
							})}
							key={el.length + el}
						>
							<a className='film-nav__link'>{el}</a>
						</li>
					))}
				</ul>
			</nav>
			{TabsComponents[activeTabName]}
		</>
	)
}

CardTabs.propTypes = {
	film: PropTypes.shape(propFilm),
	loadComments: PropTypes.func.isRequired,
	comments: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
	comments: getComments(state),
})

const mapDispatchToProps = (dispatch) => ({
	loadComments: (id) => dispatch(commentsGet(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTabs)
