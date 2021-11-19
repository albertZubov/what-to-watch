import React, { useRef, useState } from 'react'
import { HeaderClassNames } from '../../const/const'
import Header from '../header/header'
import Footer from '../footer/footer'
import FilmList from '../film-list/film-list'
import GenresList from '../genres-list/genres-list'
import { connect } from 'react-redux'
import { getPromoFilms } from '../../store/selectors'
import './../../style-css/style.css'
import cl from 'classnames'
import PlayerYoutube from '../player/player-youtube'
import { promoFilmType, stateType } from '../../types/types'

const Main = ({ promoFilms }: { promoFilms: Array<promoFilmType> }) => {
	const [films, setFilms] = useState<Array<promoFilmType>>(
		Array.from(promoFilms)
	)
	const [startPreview, setStartPreview] = useState(false)
	const [idVideo, setIdVideo] = useState('')
	const videoRef = useRef<HTMLDivElement>(null)

	const shiftArrayRight = () => {
		const first = films.shift()
		first && setFilms([...films, first])
	}

	const shiftArrayLeft = () => {
		const last = films.pop()
		last && setFilms([last, ...films])
	}

	const handleClickPreview = (id: string) => {
		setStartPreview(true)
		setIdVideo(id)
	}

	return (
		<>
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
					<button
						className='film-card__btn film-card__btn--back'
						onClick={shiftArrayLeft}
					>
						<svg viewBox='0 0 98 98' width='78' height='78'>
							<use xlinkHref='#switch-btn'></use>
						</svg>
					</button>
					<div className='film-card__info film-card__info--main'>
						{films.map((film, id) => {
							const { img, name, videoId } = film

							return (
								<div
									className={cl('film-card__preview', {
										'film-card__preview--active': id === 1,
									})}
									key={name}
									tabIndex={id}
								>
									<div
										className='film-card__preview-wrap'
										onClick={() => handleClickPreview(videoId)}
									>
										<img src={img} alt={name} width='620' height='322' />
									</div>
								</div>
							)
						})}
					</div>
					<button
						className='film-card__btn film-card__btn--next'
						onClick={shiftArrayRight}
					>
						<svg viewBox='0 0 98 98' width='78' height='78'>
							<use xlinkHref='#switch-btn'></use>
						</svg>
					</button>
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
			<div
				className={cl('popup', {
					'popup--active': startPreview,
				})}
				ref={videoRef}
			>
				<div className='popup__video'>
					<PlayerYoutube videoId={idVideo} closeVideo={!startPreview} />
					<button
						className='popup__close'
						onClick={() => setStartPreview(false)}
					></button>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = (state: stateType) => ({
	promoFilms: getPromoFilms(state),
})

export default connect(mapStateToProps)(Main)
