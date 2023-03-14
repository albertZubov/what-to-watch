import React from 'react'
import { HeaderClassNames } from '../../const/const'
import Header from '../header/header'
import Footer from '../footer/footer'
import FilmCardPreview from '../film-card-preview/film-card-preview'
import { getFilmsFavorite } from '../../store/selectors'
import { useAppSelector } from '../../hooks/hooks'
import { State } from '../../types/state'
import { FilmType } from '../../types/types'

const MyList = (): JSX.Element => {
	const filmsFavorite = useAppSelector((state: State) =>
		getFilmsFavorite(state)
	)

	return (
		<div className='user-page'>
			<Header clHeader={HeaderClassNames.MY_LIST}>
				<h1 className='page-title user-page__title'>My list</h1>
			</Header>

			<section className='catalog'>
				<h2 className='catalog__title visually-hidden'>Catalog</h2>
				<div className='catalog__films-list'>
					{filmsFavorite.map((film: FilmType) => (
						<FilmCardPreview film={film} key={film.id} />
					))}
				</div>
			</section>

			<Footer />
		</div>
	)
}

export default MyList
