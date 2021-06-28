import React from 'react'
import PropTypes from 'prop-types'
import { propFilm } from '../../props/props'
import { connect } from 'react-redux'
import { getFilms } from '../../store/selectors'
import FilmCardPreview from '../film-card-preview/film-card-preview'

const FilmList = ({ films }) => {
	return (
		<div className='catalog__films-list'>
			{films.map((film) => (
				<FilmCardPreview film={film} key={film.id} />
			))}
		</div>
	)
}

FilmList.propTypes = {
	films: PropTypes.arrayOf(PropTypes.shape(propFilm)),
}

const mapStateToProps = (state) => ({
	films: getFilms(state),
})

export default connect(mapStateToProps)(FilmList)
