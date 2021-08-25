import React from 'react'
import PropTypes from 'prop-types'
import { getActiveGenre, getGenres } from '../../store/selectors'
import { connect } from 'react-redux'
import { ActionCreator } from '../../store/action'
import { DEFAULT_GENRE } from '../../const/const'
import cl from 'classnames'

const GenresList = ({ changeGenre, genres, activeGenre }) => {
	return (
		<ul
			className='catalog__genres-list'
			onClick={({ target }) => {
				if (target.tagName === 'A') {
					changeGenre(target.textContent)
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

GenresList.propTypes = {
	changeGenre: PropTypes.func.isRequired,
	genres: PropTypes.array.isRequired,
	activeGenre: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
	genres: getGenres(state),
	activeGenre: getActiveGenre(state),
})

const mapDispatchToProps = (dispatch) => ({
	changeGenre: (genre) => dispatch(ActionCreator.changeGenre(genre)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GenresList)
