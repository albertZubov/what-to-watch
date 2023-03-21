import React, { useEffect, useState } from 'react'
import cl from 'classnames'
import CardTabOverview from './card-tab-overview'
import CardTabDetails from './card-tab-details'
import CardTabReviews from './card-tab-reviews'
import { fetchCommentsAction } from '../../store/api-actions'
import { getComments } from '../../store/selectors'
import { CommentType, FilmType } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

const TabNames = {
	OVERVIEW: 'Overview',
	DETAILS: 'Details',
	REVIEWS: 'Reviews',
}

const CardTabs = ({ film }: { film: FilmType }): JSX.Element => {
	const dispatch = useAppDispatch()
	const [activeTabName, setActiveTabName] = useState<string>(TabNames.OVERVIEW)
	const comments: CommentType[] = useAppSelector((state) => getComments(state))

	const TabsComponents = {
		[TabNames.OVERVIEW]: <CardTabOverview film={film} />,
		[TabNames.DETAILS]: <CardTabDetails film={film} />,
		[TabNames.REVIEWS]: <CardTabReviews comments={comments} />,
	}

	useEffect(() => {
		dispatch(fetchCommentsAction({ id: film.id }))
	}, [])

	return (
		<>
			<nav className='film-nav film-card__nav'>
				<ul
					className='film-nav__list'
					onClick={({ target }: { target: EventTarget }) => {
						const targetType = target as HTMLLinkElement
						if (targetType.textContent && targetType.tagName === 'A') {
							setActiveTabName(targetType.textContent)
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

export default CardTabs
