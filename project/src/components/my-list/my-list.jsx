import React from 'react'
import { HeaderClassNames } from '../../const/const'
import Header from '../header/header'
import Footer from '../footer/footer'
import FilmCardPreview from '../film-card-preview/film-card-preview'
import { connect } from 'react-redux'
import { getFilmsFavorite } from '../../store/selectors'
import PropTypes from 'prop-types'

const MyList = ({ filmsFavorite }) => {
	return (
		<div className='user-page'>
			<Header clHeader={HeaderClassNames.MY_LIST}>
				<h1 className='page-title user-page__title'>My list</h1>
			</Header>

			<section className='catalog'>
				<h2 className='catalog__title visually-hidden'>Catalog</h2>
				<div className='catalog__films-list'>
					{filmsFavorite.map((film) => (
						<FilmCardPreview film={film} key={film.id} />
					))}
				</div>
			</section>

			<Footer />
		</div>
	)
}

MyList.propTypes = {
	filmsFavorite: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
	filmsFavorite: getFilmsFavorite(state),
})

export default connect(mapStateToProps)(MyList)
