import browserHistory from '../browser-history'
import { AppRoute, AuthorizationStatus } from '../const/const'
import { formattingDataServerToClinet, serverAdapter } from '../utils/utils'
import { ActionCreator } from './action'
import { transformBoolToNumber } from '../utils/utils'
import { ThunkAction } from 'redux-thunk'
import {
	commentType,
	filmType,
	promoFilmType,
	stateType,
	userType,
} from '../types/types'
import { AnyAction } from 'redux'

type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	stateType,
	{ api: any },
	AnyAction
>

type AppThunkMock<ReturnType = void> = ThunkAction<
	ReturnType,
	stateType,
	{ mockApi: any },
	AnyAction
>

export const fetchFilmsList = (): AppThunk => {
	return (dispatch, _getState, { api }) =>
		api.get(AppRoute.FILMS).then(({ data }: { data: Array<filmType> }) => {
			const formatData = formattingDataServerToClinet(data)
			dispatch(ActionCreator.loadingFilms(formatData))
			return formatData
		})
}

export const fetchFilmsListSimilar = (id: number): AppThunk => {
	return (dispatch, _getState, { api }) =>
		api
			.get(`${AppRoute.FILMS}/${id}/similar`)
			.then(({ data }: { data: Array<filmType> }) => {
				const formatData = formattingDataServerToClinet(data)
				return dispatch(ActionCreator.loadingFilmsSimilar(formatData))
			})
}

export const commentsGet = (id: number): AppThunk => {
	return (dispatch, _getState, { api }) =>
		api
			.get(`${AppRoute.COMMENT}/${id}`)
			.then(({ data }: { data: Array<commentType> }) => {
				return dispatch(ActionCreator.loadingComments(data))
			})
}

export const commentsPost = (
	comment: string,
	rating: number,
	id: number
): AppThunk => {
	return (_dispatch, _getState, { api }) =>
		api
			.post(`${AppRoute.COMMENT}/${id}`, { comment, rating })
			.then(() => browserHistory.push(`${AppRoute.FILMS}/${id}`))
}

export const checkAuth = (): AppThunk => {
	return (dispatch, _getState, { api }) =>
		api
			.get(AppRoute.LOGIN)
			.then(({ data }: { data: userType }) => {
				dispatch(ActionCreator.loadUserData(serverAdapter(data)))
				dispatch(ActionCreator.requreAuthorization(AuthorizationStatus.AUTH))
			})
			.catch((err: any) => console.log(err))
}

export const login = ({
	login: email,
	password: password,
}: {
	login: string
	password: string
}): AppThunk => {
	return (dispatch, _getState, { api }) =>
		api
			.post(AppRoute.LOGIN, { email, password })
			.then(({ data }: { data: userType }) => {
				localStorage.setItem('token', data.token)
				dispatch(ActionCreator.loadUserData(serverAdapter(data)))
				dispatch(ActionCreator.requreAuthorization(AuthorizationStatus.AUTH))
			})
			.then(() => browserHistory.push(AppRoute.ROOT))
}

export const logout = (): AppThunk => {
	return (dispatch, _getState, { api }) =>
		api
			.delete(AppRoute.LOGOUT)
			.then(({ data }: { data: any }) =>
				localStorage.setItem('token', data.token)
			)
			.then(() => dispatch(ActionCreator.logOut()))
}

export const favoritePost = (id: number, status: boolean): AppThunk => {
	return (dispatch, _getState, { api }) =>
		api
			.post(`${AppRoute.FAVORITES}/${id}/${transformBoolToNumber(status)}`)
			.then(({ data }: { data: filmType }) =>
				dispatch(ActionCreator.changeFavorite(serverAdapter(data)))
			)
}

// После добавления слайдера с фильмами на главную страницу - промофильм там не отображается. Нет нужды в данном action
// export const getPromoFilm = (): AppThunk => {
// 	return (dispatch, _getState, { api }) =>
// 		api.get(AppRoute.PROMO).then(({ data }: { data: any }) => {
// 			const formatData = serverAdapter(data)
// 			dispatch(ActionCreator.loadingPromoFilm(formatData))
// 		})
// }

export const getPromoFilms = (): AppThunkMock => {
	return (dispatch, _getState, { mockApi }) =>
		mockApi
			.get('/promo_films')
			.then(({ data }: { data: Array<promoFilmType> }) =>
				dispatch(ActionCreator.loadingPromoFilms(data))
			)
}
