import { AppRoute } from '../const/const'
import { formattingDataServerToClinet } from '../utils/utils'
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
