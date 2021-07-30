import browserHistory from '../browser-history'
import { AppRoute, AuthorizationStatus } from '../const/const'
import { formattingDataServerToClinet, serverAdapter } from '../utils/utils'
import { ActionCreator } from './action'

export const fetchFilmsList = () => (dispatch, _getState, api) =>
	api.get(AppRoute.FILMS).then(({ data }) => {
		const formatData = formattingDataServerToClinet(data)
		dispatch(ActionCreator.loadingFilms(formatData))
		return formatData
	})

export const fetchFilmsListSimilar = (id) => (dispatch, _getState, api) =>
	api.get(`${AppRoute.FILMS}/${id}/similar`).then(({ data }) => {
		const formatData = formattingDataServerToClinet(data)
		return dispatch(ActionCreator.loadingFilmsSimilar(formatData))
	})

export const commentsGet = (id) => (dispatch, _getState, api) =>
	api.get(`${AppRoute.COMMENT}/${id}`).then(({ data }) => {
		return dispatch(ActionCreator.loadingComments(data))
	})

export const commentsPost = (comment, rating, id) => {
	return (_dispatch, _getState, api) =>
		api
			.post(`${AppRoute.COMMENT}/${id}`, { comment, rating })
			.then(() => browserHistory.push(`${AppRoute.FILMS}/${id}`))
}

export const checkAuth = () => (dispatch, _getState, api) =>
	api
		.get(AppRoute.LOGIN)
		.then(({ data }) => {
			dispatch(ActionCreator.loadUserData(serverAdapter(data)))
			dispatch(ActionCreator.requreAuthorization(AuthorizationStatus.AUTH))
		})
		.catch((err) => console.log(err))

export const login = ({ login: email, password: password }) => {
	return (dispatch, _getState, api) =>
		api
			.post(AppRoute.LOGIN, { email, password })
			.then(({ data }) => {
				localStorage.setItem('token', data.token)
				dispatch(ActionCreator.loadUserData(serverAdapter(data)))
				dispatch(ActionCreator.requreAuthorization(AuthorizationStatus.AUTH))
			})
			.then(() => browserHistory.push(AppRoute.ROOT))
}

export const logout = () => (dispatch, _getState, api) =>
	api
		.delete(AppRoute.LOGOUT)
		.then(({ data }) => localStorage.setItem('token', data.token))
		.then(() => dispatch(ActionCreator.logOut()))
