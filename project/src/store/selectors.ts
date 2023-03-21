import { createSelector } from 'reselect'
import { State } from '../types/state'
import { CommentType, FilmType, PromoFilmType, UserType } from '../types/types'
import { sortArrOnGenres } from '../utils/utils'

export const getFilms = (state: State): Array<FilmType> => state.DATA.films

export const getFilmsSimilar = (state: State): Array<FilmType> =>
	state.DATA.filmsSimilar

export const getFilm = (state: State, propId: number): FilmType | undefined =>
	getFilms(state).find(({ id }) => id === propId)

export const getGenres = createSelector(
	getFilms,
	(films: Array<FilmType>): Array<string> => [
		...new Set(films.map((film) => film.genre)),
	]
)

export const getComments = (state: State): Array<CommentType> =>
	state.DATA.comments

export const getActiveGenre = (state: State): string =>
	state.PROCESS.activeGenre

export const getGenresFilms = createSelector(
	[getFilms, getActiveGenre],
	(films: Array<FilmType>, activeGenre: string): Array<FilmType> =>
		sortArrOnGenres(films)[activeGenre]
)

export const getAuthorizationStatus = (state: State): string =>
	state.USER.authorizationStatus

export const getUserData = (state: State): UserType => state.USER.userData

export const getFilmsFavorite = (state: State): Array<FilmType> =>
	getFilms(state).filter((film: FilmType) => film.isFavorite)

export const getPromoFilms = (state: State): Array<PromoFilmType> =>
	state.DATA.promoFilms
