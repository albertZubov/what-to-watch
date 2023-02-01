export const AppClient = {
	ROOT: '/',
	MY_LIST: '/mylist',
	FILM_ID: 'films/:id',
	LOGIN: '/login',
	ADD_REVIEW_ID: 'films/:id/review',
	PLAYER_ID: 'player/:id',
}

export const AppRoute = {
	PROMO: '/data.json',
	FILMS: '/films',
	COMMENT: '/comments',
	LOGIN: '/login',
	LOGOUT: '/logout',
	ROOT: '/',
	FAVORITES: '/favorite',
}

export const HeaderClassNames = {
	DEFAULT: '',
	MAIN: 'film-card__head',
	MY_LIST: 'user-page__head',
}

export const DEFAULT_GENRE = 'All genres'

export const AuthorizationStatus = {
	AUTH: 'AUTH',
	NO_AUTH: 'NO_AUTH',
}
