import React from 'react'
import { getActiveGenre, getGenres } from '../../store/selectors'
import { DEFAULT_GENRE } from '../../const/const'
import cl from 'classnames'
import { changeGenre } from '../../store/reducers/process'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { State } from '../../types/state'

const GenresList = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const genres = useAppSelector((state: State) => getGenres(state))
	const activeGenre = useAppSelector((state: State) => getActiveGenre(state))

	return (
		<ul
			className='catalog__genres-list'
			onClick={({ target }) => {
				const targetType = target as HTMLElement
				if (targetType.tagName === 'A' && targetType.textContent) {
					dispatch(changeGenre(targetType.textContent))
				}
			}}
		>
			{[DEFAULT_GENRE, ...genres].map((genre: string) => {
				return (
					<li
						className={cl('catalog__genres-item', {
							'catalog__genres-item--active': genre === activeGenre,
						})}
						key={genre}
					>
						<a className='catalog__genres-link'>{genre}</a>
					</li>
				)
			})}
		</ul>
	)
}

export default GenresList
