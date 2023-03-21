import { createSlice } from '@reduxjs/toolkit'
import { AuthorizationStatus, NameSpace } from '../../const/const'
import { User } from '../../types/state'
import { checkAuthAction, logInAction, logOutAction } from '../api-actions'

export const initialState: User = {
	authorizationStatus: AuthorizationStatus.NO_AUTH,
	userData: {
		id: 0,
		email: '',
		name: 'Victor',
		avatarUrl: '../img/avatar.jpg',
		token: '',
	},
}

export const user = createSlice({
	name: NameSpace.Data,
	initialState,
	reducers: {
		requreAuthorization: (state, action) => {
			state.authorizationStatus = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addCase(checkAuthAction.fulfilled, (state) => {
				state.authorizationStatus = AuthorizationStatus.AUTH
			})
			.addCase(checkAuthAction.rejected, (state) => {
				state.authorizationStatus = AuthorizationStatus.NO_AUTH
			})
			.addCase(logInAction.fulfilled, (state, action) => {
				state.userData = action.payload
				state.authorizationStatus = AuthorizationStatus.AUTH
			})
			.addCase(logInAction.rejected, (state) => {
				state.userData = initialState.userData
				state.authorizationStatus = AuthorizationStatus.NO_AUTH
			})
			.addCase(logOutAction.fulfilled, (state) => {
				state.userData = initialState.userData
				state.authorizationStatus = AuthorizationStatus.NO_AUTH
			})
	},
})

export const { requreAuthorization } = user.actions
