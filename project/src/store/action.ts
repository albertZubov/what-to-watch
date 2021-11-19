import { commentType, filmType, promoFilmType, userType } from '../types/types'

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
	LOAD_PROMO_FILMS: 'LOAD_PROMO_FILMS',
} as const

export const ActionCreator = {
	loadingFilms: (films: filmType[]) => ({
		type: ActionType.LOAD_FILMS,
		payload: films,
	}),

	loadingFilmsSimilar: (films: filmType[]) => ({
		type: ActionType.LOAD_FILMS_SIMILAR,
		payload: films,
	}),

	loadingComments: (comments: commentType[]) => ({
		type: ActionType.LOAD_COMMENTS,
		payload: comments,
	}),

	changeGenre: (genre: string) => ({
		type: ActionType.GENRE_SELECTION,
		payload: genre,
	}),

	requreAuthorization: (status: string) => ({
		type: ActionType.REQUIRED_AUTHORIZATION,
		payload: status,
	}),

	loadUserData: (userData: userType) => ({
		type: ActionType.LOAD_USER_DATA,
		payload: userData,
	}),

	logOut: () => ({
		type: ActionType.LOG_OUT,
	}),

	changeFavorite: (payload: filmType) => ({
		type: ActionType.CHANGE_FAVORITE,
		payload,
	}),

	loadingPromoFilms: (promo: Array<promoFilmType>) => ({
		type: ActionType.LOAD_PROMO_FILMS,
		payload: promo,
	}),
}

// Types
type LoadingFilmsActionType = {
	type: typeof ActionType.LOAD_FILMS
	payload: filmType[]
}

type LoadingFilmsSimilarActionType = {
	type: typeof ActionType.LOAD_FILMS_SIMILAR
	payload: filmType[]
}

type LoadingCommentsActionType = {
	type: typeof ActionType.LOAD_COMMENTS
	payload: commentType[]
}

type ChangeGenreActionType = {
	type: typeof ActionType.GENRE_SELECTION
	payload: string
}

type RequreAuthorizationActionType = {
	type: typeof ActionType.REQUIRED_AUTHORIZATION
	payload: string
}

type LoadUserDataActionType = {
	type: typeof ActionType.LOAD_USER_DATA
	payload: userType
}

type LogOutActionType = {
	type: typeof ActionType.LOG_OUT
}

type ChangeFavoriteActionType = {
	type: typeof ActionType.CHANGE_FAVORITE
	payload: filmType
}

type LoadingPromoFilmsActionType = {
	type: typeof ActionType.LOAD_PROMO_FILMS
	payload: Array<promoFilmType>
}

export type TypesActions =
	| LoadingFilmsActionType
	| LoadingFilmsSimilarActionType
	| LoadingCommentsActionType
	| ChangeGenreActionType
	| RequreAuthorizationActionType
	| LoadUserDataActionType
	| LogOutActionType
	| ChangeFavoriteActionType
	| LoadingPromoFilmsActionType
