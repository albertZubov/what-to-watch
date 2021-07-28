import { createSelector } from 'reselect'
import { sortArrOnGenres } from '../utils/utils'

export const getFilms = (state) => state.DATA.films
export const getFilmsSimilar = (state) => state.DATA.filmsSimilar
export const getFilm = (state, propId) =>
	getFilms(state).find(({ id }) => id === propId)
export const getGenres = createSelector(getFilms, (films) => [
	...new Set(films.map((film) => film.genre)),
])
export const getComments = (state) => state.DATA.comments
export const getActiveGenre = (state) => state.PROCESS.activeGenre
export const getGenresFilms = createSelector(
	[getFilms, getActiveGenre],
	(films, activeGenre) => sortArrOnGenres(films)[activeGenre]
)
export const getAuthorizationStatus = (state) => state.USER.authorizationStatus
export const getUserData = (state) => state.USER.userData
