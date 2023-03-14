import { store } from '..'
import { CommentType, FilmType, PromoFilmType, UserType } from './types'

export type Data = {
	films: Array<FilmType>
	filmsSimilar: Array<FilmType>
	comments: Array<CommentType>
	promoFilms: Array<PromoFilmType>
}

export type User = {
	authorizationStatus: string
	userData: UserType
}

export type Process = {
	activeGenre: string
}

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
