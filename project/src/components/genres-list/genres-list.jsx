import React from 'react'
import PropTypes from 'prop-types'
import { getGenres } from '../../store/selectors'
import { connect } from 'react-redux'
import { ActionCreator } from '../../store/action'
import { DEFAULT_GENRE } from '../../const/const'

const GenresList = ({ changeGenre, genres }) => {
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
					<li className='catalog__genres-item' key={el}>
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
}

const mapStateToProps = (state) => ({
	genres: getGenres(state),
})

const mapDispatchToProps = (dispatch) => ({
	changeGenre: (genre) => dispatch(ActionCreator.changeGenre(genre)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GenresList)
