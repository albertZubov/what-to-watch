export const ActionType = {
	LOAD_FILMS: 'LOAD_FILMS',
	LOAD_FILMS_SIMILAR: 'LOAD_FILMS_SIMILAR',
	CHANGE_TAB: 'CHANGE_TAB',
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

	changeTab: (tab) => ({
		type: ActionType.CHANGE_TAB,
		payload: tab,
	}),
}
