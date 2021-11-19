import React from 'react'
import { getActiveGenre, getGenres } from '../../store/selectors'
import { connect } from 'react-redux'
import { ActionCreator } from '../../store/action'
import { DEFAULT_GENRE } from '../../const/const'
import cl from 'classnames'
import { stateType } from '../../types/types'

type propsType = {
	changeGenre: (genre: string) => string
	genres: Array<string>
	activeGenre: string
}

const GenresList = ({ changeGenre, genres, activeGenre }: propsType) => {
	return (
		<ul
			className='catalog__genres-list'
			onClick={({ target }) => {
				const targetType = target as HTMLElement
				if (targetType.tagName === 'A' && targetType.textContent !== null) {
					changeGenre(targetType.textContent)
				}
			}}
		>
			{[DEFAULT_GENRE, ...genres].map((el) => {
				return (
					<li
						className={cl('catalog__genres-item', {
							'catalog__genres-item--active': el === activeGenre,
						})}
						key={el}
					>
						<a className='catalog__genres-link'>{el}</a>
					</li>
				)
			})}
		</ul>
	)
}

const mapStateToProps = (state: stateType) => ({
	genres: getGenres(state),
	activeGenre: getActiveGenre(state),
})

const mapDispatchToProps = (dispatch: any) => ({
	changeGenre: (genre: string) => dispatch(ActionCreator.changeGenre(genre)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GenresList)
