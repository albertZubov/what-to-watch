import { CommentType, FilmType, PromoFilmType, UserType } from '../types/types'

export const ActionType = {
	LOAD_FILMS: 'LOAD_FILMS',
	LOAD_FILMS_SIMILAR: 'LOAD_FILMS_SIMILAR',
	LOAD_COMMENTS: 'LOAD_COMMENTS',
	GENRE_SELECTION: 'GENRE_SELECTION',
	REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
	LOAD_USER_DATA: 'LOAD_USER_DATA',
	LOG_OUT: 'LOG_OUT',
	CHANGE_FAVORITE: 'CHANGE_FAVORITE',
	LOAD_PROMO_FILMS: 'LOAD_PROMO_FILMS',
} as const

export const ActionCreator = {
	loadingFilms: (films: FilmType[]) => ({
		type: ActionType.LOAD_FILMS,
		payload: films,
	}),

	loadingFilmsSimilar: (films: FilmType[]) => ({
		type: ActionType.LOAD_FILMS_SIMILAR,
		payload: films,
	}),

	loadingComments: (comments: CommentType[]) => ({
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

	loadUserData: (userData: UserType) => ({
		type: ActionType.LOAD_USER_DATA,
		payload: userData,
	}),

	logOut: () => ({
		type: ActionType.LOG_OUT,
	}),

	changeFavorite: (payload: FilmType) => ({
		type: ActionType.CHANGE_FAVORITE,
		payload,
	}),

	loadingPromoFilms: (promo: PromoFilmType[]) => ({
		type: ActionType.LOAD_PROMO_FILMS,
		payload: promo,
	}),
}

// Types
type LoadingFilmsActionType = {
	type: typeof ActionType.LOAD_FILMS
	payload: FilmType[]
}

type LoadingFilmsSimilarActionType = {
	type: typeof ActionType.LOAD_FILMS_SIMILAR
	payload: FilmType[]
}

type LoadingCommentsActionType = {
	type: typeof ActionType.LOAD_COMMENTS
	payload: CommentType[]
}

type ChangeGenreActionType = {
	type: typeof ActionType.GENRE_SELECTION
	payload: string
}

export type RequreAuthorizationActionType = {
	type: typeof ActionType.REQUIRED_AUTHORIZATION
	payload: string
}

type LoadUserDataActionType = {
	type: typeof ActionType.LOAD_USER_DATA
	payload: UserType
}

type LogOutActionType = {
	type: typeof ActionType.LOG_OUT
}

type ChangeFavoriteActionType = {
	type: typeof ActionType.CHANGE_FAVORITE
	payload: FilmType
}

type LoadingPromoFilmsActionType = {
	type: typeof ActionType.LOAD_PROMO_FILMS
	payload: PromoFilmType[]
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
