import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FilmCardPreview from '../film-card-preview/film-card-preview'
import { getGenresFilms } from '../../store/selectors'

const FilmList = ({ filmsOnGenre }) => {
	return (
		<div className='catalog__films-list'>
			{filmsOnGenre.map((film) => (
				<FilmCardPreview film={film} key={film.id} />
			))}
		</div>
	)
}

FilmList.propTypes = {
	filmsOnGenre: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
	filmsOnGenre: getGenresFilms(state),
})

export default connect(mapStateToProps)(FilmList)
