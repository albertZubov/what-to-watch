import browserHistory from '../browser-history'
import { AppRoute } from '../const/const'
import { formattingDataServerToClinet, serverAdapter } from '../utils/utils'
import { transformBoolToNumber } from '../utils/utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	FilmType,
	CommentType,
	AuthDataType,
	UserType,
	ArrayPromoFilmsType,
} from '../types/types'
import { AppDispatch, State } from '../types/state'
import { AxiosInstance } from 'axios'

interface apiType {
	api: AxiosInstance
	mockApi: AxiosInstance
}

export const fetchFilmsListAction = createAsyncThunk<
	Array<FilmType>,
	undefined,
	{
		dispatch: AppDispatch
		state: State
		extra: apiType
	}
>('data/fetchFilmList', async (_arg, { dispatch, extra: { api } }) => {
	const { data } = await api.get(AppRoute.FILMS)
	return formattingDataServerToClinet(data)
})

export const fetchPromoFilmsAction = createAsyncThunk<
	ArrayPromoFilmsType,
	undefined,
	{
		dispatch: AppDispatch
		state: State
		extra: apiType
	}
>('data/fetchPromoFilms', async (_arg, { dispatch, extra: { mockApi } }) => {
	const { data } = await mockApi.get(AppRoute.PROMO)
	return serverAdapter(data)
})

export const fetchFilmsListSimilarAction = createAsyncThunk<
	Array<FilmType>,
	{ id: number },
	{
		dispatch: AppDispatch
		state: State
		extra: apiType
	}
>(
	'data/fetchFilmsListSimilar',
	async ({ id }, { dispatch, extra: { api } }) => {
		const { data } = await api.get(`${AppRoute.FILMS}/${id}/similar`)
		return formattingDataServerToClinet(data)
	}
)

export const fetchCommentsAction = createAsyncThunk<
	Array<CommentType>,
	{ id: number },
	{
		dispatch: AppDispatch
		state: State
		extra: apiType
	}
>('data/fetchComments', async ({ id }, { dispatch, extra: { api } }) => {
	const { data } = await api.get(`${AppRoute.COMMENT}/${id}`)
	return data
})

export const checkAuthAction = createAsyncThunk<
	void,
	undefined,
	{
		dispatch: AppDispatch
		state: State
		extra: apiType
	}
>('user/checkAuth', async (_arg, { dispatch, extra: { api } }) => {
	await api.get(AppRoute.LOGIN)
})

export const sendCommentAction = createAsyncThunk<
	void,
	CommentType,
	{
		dispatch: AppDispatch
		state: State
		extra: apiType
	}
>(
	'user/sendComment',
	async ({ comment, rating, id }, { dispatch, extra: { api } }) => {
		await api.post(`${AppRoute.COMMENT}/${id}`, { comment, rating })
		browserHistory.back()
	}
)

export const logInAction = createAsyncThunk<
	UserType,
	AuthDataType,
	{
		dispatch: AppDispatch
		state: State
		extra: apiType
	}
>(
	'user/logIn',
	async (
		{ login: email, password: password },
		{ dispatch, extra: { api } }
	) => {
		const { data } = await api.post(AppRoute.LOGIN, { email, password })
		localStorage.setItem('token', data.token)
		browserHistory.back()
		return serverAdapter(data)
	}
)

export const logOutAction = createAsyncThunk<
	void,
	undefined,
	{
		dispatch: AppDispatch
		state: State
		extra: apiType
	}
>('user/logOut', async (_arg, { dispatch, extra: { api } }) => {
	const { data } = await api.delete(AppRoute.LOGOUT)
	localStorage.setItem('token', data.token)
})


export const sendFavoriteAction = createAsyncThunk<
	FilmType,
	{ id: number; status: boolean },
	{
		dispatch: AppDispatch
		state: State
		extra: apiType
	}
>(
	'active/sendFavorite',
	async ({ id, status }, { dispatch, extra: { api } }) => {
		const { data } = await api.post(
			`${AppRoute.FAVORITES}/${id}/${transformBoolToNumber(status)}`
		)
		return serverAdapter(data)
	}
)
