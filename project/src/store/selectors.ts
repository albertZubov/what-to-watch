import { createSelector } from 'reselect'
import { stateType } from '../types/types'
import { sortArrOnGenres } from '../utils/utils'

export const getFilms = (state: stateType) => state.DATA.films
export const getFilmsSimilar = (state: stateType) => state.DATA.filmsSimilar
export const getFilm = (state: stateType, propId: number) =>
	getFilms(state).find(({ id }) => id === propId)
export const getGenres = createSelector(getFilms, (films) => [
	...new Set(films.map((film) => film.genre)),
])
export const getComments = (state: stateType) => state.DATA.comments
export const getActiveGenre = (state: stateType) => state.PROCESS.activeGenre
export const getGenresFilms = createSelector(
	[getFilms, getActiveGenre],
	(films, activeGenre) => sortArrOnGenres(films)[activeGenre]
)
export const getAuthorizationStatus = (state: stateType) =>
	state.USER.authorizationStatus
export const getUserData = (state: stateType) => state.USER.userData
export const getFilmsFavorite = (state: stateType) =>
	getFilms(state).filter((film) => film.isFavorite)
export const getPromoFilms = (state: stateType) => state.DATA.promoFilms
