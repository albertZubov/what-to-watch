import React from 'react'
import { HeaderClassNames } from '../../const/const'
import Header from '../header/header'
import Footer from '../footer/footer'
import FilmList from '../film-list/film-list'
import GenresList from '../genres-list/genres-list'
import { connect } from 'react-redux'
import { getPromoFilm } from '../../store/selectors'
import PropTypes from 'prop-types'
import PrivateComponent from '../private-components/private-component'
import ButtonMyList from '../private-buttons/button-my-list'
import { Link } from 'react-router-dom'

const Main = ({ promoFilm }) => {
	const { posterImage, name, genre, released, id, isFavorite } = promoFilm

	return (
		<React.Fragment>
			<section className='film-card'>
				<div className='film-card__bg'>
					<img
						src='img/bg-the-grand-budapest-hotel.jpg'
						alt='The Grand Budapest Hotel'
					/>
				</div>
				<h1 className='visually-hidden'>WTW</h1>
				<Header clHeader={HeaderClassNames.MAIN} />
				<div className='film-card__wrap'>
					<div className='film-card__info'>
						<div className='film-card__poster'>
							<img src={posterImage} alt={name} width='218' height='327' />
						</div>

						<div className='film-card__desc'>
							<h2 className='film-card__title'>{name}</h2>
							<p className='film-card__meta'>
								<span className='film-card__genre'>{genre}</span>
								<span className='film-card__year'>{released}</span>
							</p>

							<div className='film-card__buttons'>
								<Link
									className='btn btn--play film-card__button'
									to={`/player/${id}`}
								>
									<svg viewBox='0 0 19 19' width='19' height='19'>
										<use xlinkHref='#play-s'></use>
									</svg>
									<span>Play</span>
								</Link>
								<PrivateComponent>
									<ButtonMyList id={id} isFavorite={isFavorite} />
								</PrivateComponent>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='page-content'>
				<section className='catalog'>
					<h2 className='catalog__title visually-hidden'>Catalog</h2>
					<GenresList />
					<FilmList />
				</section>
				<Footer />
			</div>
		</React.Fragment>
	)
}

Main.propTypes = {
	promoFilm: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	promoFilm: getPromoFilm(state),
})

export default connect(mapStateToProps)(Main)
