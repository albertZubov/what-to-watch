import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FilmCardPreview from '../film-card-preview/film-card-preview'
import { getGenresFilms } from '../../store/selectors'
import ButtonShowMore from '../button-show-more/button-show-more'

const DEFAULT_FILMS = 8
const ADD_FILMS = 8

const FilmList = ({ filmsOnGenre }) => {
	const [quantity, setQuantity] = useState(DEFAULT_FILMS)

	const filmsArr =
		filmsOnGenre.length > DEFAULT_FILMS
			? filmsOnGenre.slice(0, quantity)
			: filmsOnGenre
	const showButton =
		filmsOnGenre.length > DEFAULT_FILMS && filmsOnGenre.length >= quantity ? (
			<ButtonShowMore onClickButton={() => setQuantity(quantity + ADD_FILMS)} />
		) : (
			''
		)

	return ( 
		<>
			<div className='catalog__films-list'>
				{filmsArr.map((film) => (
					<FilmCardPreview film={film} key={film.id} />
				))}
			</div>
			{showButton}
		</>
	)
}

FilmList.propTypes = {
	filmsOnGenre: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
	filmsOnGenre: getGenresFilms(state),
})

export default connect(mapStateToProps)(FilmList)
