import React, { useEffect } from 'react'
import { HeaderClassNames } from '../../const/const'
import Header from '../header/header'
import Footer from '../footer/footer'
import { connect } from 'react-redux'
import { getFilm, getFilmsSimilar } from '../../store/selectors'
import { fetchFilmsListSimilar } from '../../store/api-actions'
import { Link } from 'react-router-dom'
import CardTabs from '../card-tabs/card-tabs'
import PrivateComponent from '../private-components/private-component'
import ButtonMyList from '../private-buttons/button-my-list'
import ButtonAddReview from '../private-buttons/button-add-review'
import FilmCardPreview from '../film-card-preview/film-card-preview'
import { FilmType, StateType } from '../../types/types'

type PropsType = {
	film: FilmType | undefined
	filmsSimilar: FilmType[]
	loadingFilmsSimilar: (id: number) => Promise<FilmType[]>
}

const FilmCard = ({
	film,
	filmsSimilar,
	loadingFilmsSimilar,
}: PropsType): any => {
	useEffect(() => {
		if (film) loadingFilmsSimilar(film.id)
	}, [])

	if (film) {
		const { name, genre, released, posterImage, id, isFavorite } = film

		return (
			<React.Fragment>
				<section className='film-card film-card--full'>
					<div className='film-card__hero'>
						<div className='film-card__bg'>
							<img
								src='img/bg-the-grand-budapest-hotel.jpg'
								alt='The Grand Budapest Hotel'
							/>
						</div>
						<h1 className='visually-hidden'>WTW</h1>

						<Header clHeader={HeaderClassNames.MAIN} />

						<div className='film-card__wrap'>
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
										<>
											<ButtonMyList id={id} isFavorite={isFavorite} />
											<ButtonAddReview id={id} />
										</>
									</PrivateComponent>
								</div>
							</div>
						</div>
					</div>
					<div className='film-card__wrap film-card__translate-top'>
						<div className='film-card__info'>
							<div className='film-card__poster film-card__poster--big'>
								<img src={posterImage} alt={name} width='218' height='327' />
							</div>
							<div className='film-card__desc'>
								<CardTabs film={film} />
							</div>
						</div>
					</div>
				</section>
				<div className='page-content'>
					<section className='catalog catalog--like-this'>
						<h2 className='catalog__title'>More like this</h2>
						<div className='catalog__films-list'>
							{filmsSimilar.map((filmSm) => (
								<FilmCardPreview film={filmSm} key={filmSm.name + id} />
							))}
						</div>
					</section>
					<Footer />
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (
	state: StateType,
	{ activeId }: { activeId: number }
) => ({
	film: getFilm(state, activeId),
	filmsSimilar: getFilmsSimilar(state).slice(0, 4),
})

const mapDispatchToProps = (dispatch: any) => ({
	loadingFilmsSimilar: (id: number) => dispatch(fetchFilmsListSimilar(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmCard)
