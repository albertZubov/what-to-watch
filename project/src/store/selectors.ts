import { createSelector } from 'reselect'
import { StateType } from '../types/types'
import { sortArrOnGenres } from '../utils/utils'

export const getFilms = (state: StateType) => state.DATA.films
export const getFilmsSimilar = (state: StateType) => state.DATA.filmsSimilar
export const getFilm = (state: StateType, propId: number) =>
	getFilms(state).find(({ id }) => id === propId)
export const getGenres = createSelector(getFilms, (films) => [
	...new Set(films.map((film) => film.genre)),
])
export const getComments = (state: StateType) => state.DATA.comments
export const getActiveGenre = (state: StateType) => state.PROCESS.activeGenre
export const getGenresFilms = createSelector(
	[getFilms, getActiveGenre],
	(films, activeGenre) => sortArrOnGenres(films)[activeGenre]
)
export const getAuthorizationStatus = (state: StateType) =>
	state.USER.authorizationStatus
export const getUserData = (state: StateType) => state.USER.userData
export const getFilmsFavorite = (state: StateType) =>
	getFilms(state).filter((film) => film.isFavorite)
export const getPromoFilms = (state: StateType) => state.DATA.promoFilms
