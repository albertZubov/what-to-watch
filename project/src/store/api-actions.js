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

export const checkAuth = () => (dispatch, _getState, api) =>
	api
		.get(AppRoute.LOGIN)
		.then(() => {
			dispatch(ActionCreator.requreAuthorization(AuthorizationStatus.AUTH))
		})
		.catch((err) => console.log(err))

/* eslint-disable indent */
export const login = ({ login: email, password: password }) => {
	return (dispatch, _getState, api) =>
		api
			.post(AppRoute.LOGIN, { email, password })
			.then(({ data }) => {
				localStorage.setItem('token', data.token),
					dispatch(ActionCreator.loadUserData(serverAdapter(data))),
					dispatch(ActionCreator.requreAuthorization(AuthorizationStatus.AUTH))
			})
			.then(() => browserHistory.push(AppRoute.ROOT))
}
/* eslint-enable indent */
