import React from 'react'
import { HeaderClassNames } from '../../const/const'
import FilmCard from '../film-card/film-card'
import Header from '../header/header'
import Footer from '../footer/footer'

const genresNames = [
	'Comedies',
	'Crime',
	'Documentary',
	'Dramas',
	'Horror',
	'Kids & Family',
	'Romance',
	'Sci-Fi',
	'Thrillers',
]

const Main = () => {
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
							<img
								src='img/the-grand-budapest-hotel-poster.jpg'
								alt='The Grand Budapest Hotel poster'
								width='218'
								height='327'
							/>
						</div>

						<div className='film-card__desc'>
							<h2 className='film-card__title'>The Grand Budapest Hotel</h2>
							<p className='film-card__meta'>
								<span className='film-card__genre'>Drama</span>
								<span className='film-card__year'>2014</span>
							</p>

							<div className='film-card__buttons'>
								<button
									className='btn btn--play film-card__button'
									type='button'
								>
									<svg viewBox='0 0 19 19' width='19' height='19'>
										<use xlinkHref='#play-s'></use>
									</svg>
									<span>Play</span>
								</button>
								<button
									className='btn btn--list film-card__button'
									type='button'
								>
									<svg viewBox='0 0 19 20' width='19' height='20'>
										<use xlinkHref='#add'></use>
									</svg>
									<span>My list</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='page-content'>
				<section className='catalog'>
					<h2 className='catalog__title visually-hidden'>Catalog</h2>

					<ul className='catalog__genres-list'>
						<li className='catalog__genres-item catalog__genres-item--active'>
							<a href='#' className='catalog__genres-link'>
								All genres
							</a>
						</li>
						{genresNames.map((el) => {
							return (
								<li className='catalog__genres-item' key={2}>
									<a href='#' className='catalog__genres-link'>
										{el}
									</a>
								</li>
							)
						})}
					</ul>

					<div className='catalog__films-list'>
						{new Array(5).fill('').map(() => (
							<FilmCard key={1} />
						))}
					</div>

					<div className='catalog__more'>
						<button className='catalog__button' type='button'>
							Show more
						</button>
					</div>
				</section>

				<Footer />
			</div>
		</React.Fragment>
	)
}

export default Main
