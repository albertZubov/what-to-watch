import React, { MouseEventHandler, useEffect, useState } from 'react'
import cl from 'classnames'
import CardTabOverview from './card-tab-overview'
import CardTabDetails from './card-tab-details'
import CardTabReviews from './card-tab-reviews'
import { commentsGet } from '../../store/api-actions'
import { connect } from 'react-redux'
import { getComments } from '../../store/selectors'
import { commentType, filmType, stateType } from '../../types/types'

const TabNames = {
	OVERVIEW: 'Overview',
	DETAILS: 'Details',
	REVIEWS: 'Reviews',
}

// TODO: Переделать все массивы на новый вид записи
// TODO: Поправить проверку типа target

type propsType = {
	film: filmType
	comments: Array<commentType>
	loadComments: (id: number) => Promise<Array<commentType>>
}

const CardTabs = ({ film, loadComments, comments }: propsType) => {
	const [activeTabName, setActiveTabName] = useState<string>(TabNames.OVERVIEW)

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
					onClick={({ target }: MouseEventHandler<HTMLAnchorElement>) => {
						// const targetType = target as HTMLElement
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

const mapStateToProps = (state: stateType) => ({
	comments: getComments(state),
})

const mapDispatchToProps = (dispatch: any) => ({
	loadComments: (id: number) => dispatch(commentsGet(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTabs)
