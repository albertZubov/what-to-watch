export const ActionType = {
	LOAD_FILMS: 'LOAD_FILMS',
	LOAD_FILMS_SIMILAR: 'LOAD_FILMS_SIMILAR',
	LOAD_COMMENTS: 'LOAD_COMMENTS',
	GENRE_SELECTION: 'GENRE_SELECTION',
	REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
	LOAD_USER_DATA: 'LOAD_USER_DATA',
	REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
	LOG_OUT: 'LOG_OUT',
	CHANGE_FAVORITE: 'CHANGE_FAVORITE',
	LOAD_PROMO: 'LOAD_PROMO',
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

	changeGenre: (genre) => ({
		type: ActionType.GENRE_SELECTION,
		payload: genre,
	}),

	requreAuthorization: (status) => ({
		type: ActionType.REQUIRED_AUTHORIZATION,
		payload: status,
	}),

	loadUserData: (userData) => ({
		type: ActionType.LOAD_USER_DATA,
		payload: userData,
	}),

	logOut: () => ({
		type: ActionType.LOG_OUT,
	}),

	changeFavorite: (payload) => ({
		type: ActionType.CHANGE_FAVORITE,
		payload,
	}),

	loadingPromoFilm: (promo) => ({
		type: ActionType.LOAD_PROMO,
		payload: promo,
	}),
}
