export const ActionType = {
	LOAD_FILMS: 'LOAD_FILMS',
	LOAD_FILMS_SIMILAR: 'LOAD_FILMS_SIMILAR',
	LOAD_COMMENTS: 'LOAD_COMMENTS',
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

	loadingComments: (comments) => ({
		type: ActionType.LOAD_COMMENTS,
		payload: comments,
	}),
}
