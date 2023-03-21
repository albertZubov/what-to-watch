import { initialState, user } from './user'
import { User } from '../../types/state'
import { AuthorizationStatus } from '../../const/const'
import { checkAuthAction, logInAction, logOutAction } from '../api-actions'

describe('Reducer: user', () => {
	let state: User
	const userData = initialState.userData
	const authorizationStatus = initialState.authorizationStatus

	beforeEach(() => {
		state = {
			authorizationStatus,
			userData,
		}
	})

	it('without additional parameters should return initial state', () => {
		expect(user.reducer(undefined, { type: 'NO_AUTH' })).toEqual({
			authorizationStatus: AuthorizationStatus.NO_AUTH,
			userData,
		})
	})

	describe('checkAuthAction test', () => {
		it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
			expect(
				user.reducer(state, {
					type: checkAuthAction.fulfilled.type,
				})
			).toEqual({ authorizationStatus: AuthorizationStatus.AUTH, userData })
		})
		it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
			expect(
				user.reducer(state, { type: checkAuthAction.rejected.type })
			).toEqual({ authorizationStatus: AuthorizationStatus.NO_AUTH, userData })
		})
	})

	describe('logInAction test', () => {
		it('should update authorizationStatus to "AUTH" if logInAction fulfilled', () => {
			expect(user.reducer(state, { type: logInAction.fulfilled.type })).toEqual(
				{ authorizationStatus: AuthorizationStatus.AUTH }
			)
		})
		it('should update authorizationStatus to "NO_AUTH" if logInAction rejected', () => {
			expect(user.reducer(state, { type: logInAction.rejected.type })).toEqual({
				authorizationStatus: AuthorizationStatus.NO_AUTH,
				userData,
			})
		})
	})

	describe('logOutAction test', () => {
		it('should update authorizationStatus to "NO_AUTH" if logOutAction fulfilled', () => {
			expect(
				user.reducer(state, { type: logOutAction.fulfilled.type })
			).toEqual({ authorizationStatus: AuthorizationStatus.NO_AUTH, userData })
		})
	})
})
