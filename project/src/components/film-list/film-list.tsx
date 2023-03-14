import React, { ChangeEvent, useState } from 'react'
import FilmCardPreview from '../film-card-preview/film-card-preview'
import { getGenresFilms } from '../../store/selectors'
import ButtonShowMore from '../button-show-more/button-show-more'
import './film-list.css'
import { useAppSelector } from '../../hooks/hooks'
import { State } from '../../types/state'
import { FilmType } from '../../types/types'

const DEFAULT_FILMS = 8
const ADD_FILMS = 8

const FilmList = (): JSX.Element => {
	const filmsOnGenre = useAppSelector((state: State) => getGenresFilms(state))
	const [quantity, setQuantity] = useState<number>(DEFAULT_FILMS)
	const [search, setSearch] = useState<string>('')

	const films = filmsOnGenre.filter((film: FilmType) =>
		film.name.toLowerCase().includes(search)
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
					onInput={({ target }: ChangeEvent<HTMLInputElement>) =>
						setSearch(target.value)
					}
					type='text'
					placeholder='Название фильма'
					className='search__input input'
				/>
			</form>
			<div className='catalog__films-list'>
				{filmsArr.map((film: FilmType) => (
					<FilmCardPreview film={film} key={film.id} />
				))}
			</div>
			{showButton}
		</>
	)
}

export default FilmList
