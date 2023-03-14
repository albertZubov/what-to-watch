import { createSlice } from '@reduxjs/toolkit'
import { NameSpace } from '../../const/const'
import { Data } from '../../types/state'
import { FilmType } from '../../types/types'
import {
	fetchCommentsAction,
	fetchFilmsListAction,
	fetchFilmsListSimilarAction,
	fetchPromoFilmsAction,
	sendFavoriteAction,
} from '../api-actions'

const initialState: Data = {
	films: [],
	filmsSimilar: [],
	comments: [],
	promoFilms: [],
}

export const loadData = createSlice({
	name: NameSpace.Data,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchFilmsListAction.fulfilled, (state, action) => {
				state.films = action.payload
			})
			.addCase(fetchPromoFilmsAction.fulfilled, (state, action) => {
				state.promoFilms = action.payload.promoFilms
			})
			.addCase(fetchFilmsListSimilarAction.fulfilled, (state, action) => {
				state.filmsSimilar = action.payload
			})
			.addCase(fetchCommentsAction.fulfilled, (state, action) => {
				state.comments = action.payload
			})
			.addCase(sendFavoriteAction.fulfilled, (state, action) => {
				state.films = state.films.map((film: FilmType) => {
					if (film.id === action.payload.id) return action.payload
					return film
				})
			})
	},
})
