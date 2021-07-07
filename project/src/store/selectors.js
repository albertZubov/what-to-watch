import { createSelector } from 'reselect'

export const getFilms = (state) => state.DATA.films
export const getFilmsSimilar = (state) => state.DATA.filmsSimilar
export const getFilm = (state, propId) =>
	getFilms(state).find(({ id }) => id === propId)
export const getGenres = createSelector(getFilms, (films) => [
	...new Set(films.map((film) => film.genre)),
])
export const getActiveTab = (state) => state.PROCESS.activeTab
