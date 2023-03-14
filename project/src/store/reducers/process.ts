import { createSlice } from '@reduxjs/toolkit'
import { NameSpace } from '../../const/const'
import { Process } from '../../types/state'
import { DEFAULT_GENRE } from '../../const/const'

const initialState: Process = {
	activeGenre: DEFAULT_GENRE,
}

export const process = createSlice({
	name: NameSpace.Process,
	initialState,
	reducers: {
		changeGenre: (state, action) => {
			state.activeGenre = action.payload
		},
	},
})

export const { changeGenre } = process.actions
