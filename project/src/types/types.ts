type userCommentType = {
	id: number
	name: string
}

type userType = {
	id: number
	name: string
	email: string
	avatarUrl: string
	token: string
}

export type filmType = {
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

export type commentType = {
	id: number
	rating: number
	comment: string
	date: string
	user: userCommentType
}

export type stateType = {
	PROCESS: {
		activeGenre: string
	}
	DATA: {
		films: Array<filmType>
		filmsSimilar: Array<filmType>
		comments: Array<commentType>
		promoFilms: Array<filmType>
	}
	USER: {
		authorizationStatus: string
		userData: userType
	}
}
