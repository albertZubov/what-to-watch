type UserCommentType = {
	id: number
	name: string
}

export type UserType = {
	id: number
	name: string
	email: string
	avatarUrl: string
	token: string
}

export interface FilmType {
	backgroundColor: string
	backgroundImage: string
	description: string
	director: string
	genre: string
	id: number
	isFavorite: boolean
	name: string
	posterImage: string
	previewImage: string
	previewVideoLink: string
	rating: number
	released: number
	runTime: number 
	scoresCount: number
	starring: Array<string>
	videoLink: string
}

export type CommentType = {
	id: number
	rating: number
	comment: string
	date: string
	user: UserCommentType
}

export type StateType = {
	PROCESS: {
		activeGenre: string
	}
	DATA: {
		films: Array<FilmType>
		filmsSimilar: Array<FilmType>
		comments: Array<CommentType>
		promoFilms: Array<PromoFilmType>
	}
	USER: {
		authorizationStatus: string
		userData: UserType
	}
}

export type PromoFilmType = {
	img: string
	name: string
	videoId: string
}
