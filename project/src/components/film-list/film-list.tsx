import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import FilmCardPreview from '../film-card-preview/film-card-preview'
import { getGenresFilms } from '../../store/selectors'
import ButtonShowMore from '../button-show-more/button-show-more'
import { FilmType, StateType } from '../../types/types'
import './film-list.css'

const DEFAULT_FILMS = 8
const ADD_FILMS = 8

const FilmList = ({ filmsOnGenre }: { filmsOnGenre: FilmType[] }) => {
	const [quantity, setQuantity] = useState(DEFAULT_FILMS)
	const [search, setSearch] = useState('')

	const films = filmsOnGenre.filter((el: any) =>
		el.name.toLowerCase().includes(search)
	)

	const filmsArr =
		films.length > DEFAULT_FILMS ? films.slice(0, quantity) : films
	const showButton =
		films.length > DEFAULT_FILMS && films.length >= quantity ? (
			<ButtonShowMore onClickButton={() => setQuantity(quantity + ADD_FILMS)} />
		) : (
			''
		)

	return (
		<>
			<form className='search'>
				<input
					onInput={({ target }: any) => setSearch(target.value)}
					type='text'
					placeholder='Название фильма'
					className='search__input input'
				/>
			</form>
			<div className='catalog__films-list'>
				{filmsArr.map((film: any) => (
					<FilmCardPreview film={film} key={film.id} />
				))}
			</div>
			{showButton}
		</>
	)
}

const mapStateToProps = (state: StateType) => ({
	filmsOnGenre: getGenresFilms(state),
})

export default connect(mapStateToProps)(FilmList)
