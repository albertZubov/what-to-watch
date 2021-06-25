export const ActionType = {
	LOAD_FILMS: 'LOAD_FILMS',
	LOAD_FILMS_SIMILAR: 'LOAD_FILMS_SIMILAR',
}

export const ActionCreator = {
	loadingFilms: (films) => ({
		type: ActionType.LOAD_FILMS,
		payload: films,
	}),

	loadingFilmsSimilar: (films) => ({
		type: ActionType.LOAD_FILMS_SIMILAR,
		payload: films,
	}),
}
