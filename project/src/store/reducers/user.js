import { extend } from '../../utils/utils'
import { ActionType } from '../action'
import { AuthorizationStatus } from '../../const/const'

const user = () => {
	const initialState = {
		authorizationStatus: AuthorizationStatus.NO_AUTH,
		userData: {
			id: 0,
			email: 'Sign in',
			name: 'Victor',
			avatarUrl: '../img/avatar.jpg',
			token: '',
		},
	}

	return (state = initialState, action) => {
		switch (action.type) {
			case ActionType.REQUIRED_AUTHORIZATION:
				return extend(state, {
					authorizationStatus: action.payload,
				})

			case ActionType.LOAD_USER_DATA:
				return extend(state, {
					userData: action.payload,
				})
		}

		return state
	}
}

export { user }
