import { extend } from '../../utils/utils'
import { ActionType, TypesActions } from '../action'
import { AuthorizationStatus } from '../../const/const'

const user = () => {
	const initialState = {
		authorizationStatus: AuthorizationStatus.NO_AUTH,
		userData: {
			id: 0,
			email: '',
			name: 'Victor',
			avatarUrl: '../img/avatar.jpg',
			token: '',
		},
	}

	type InitialState = typeof initialState

	return (state = initialState, action: TypesActions): InitialState => {
		switch (action.type) {
			case ActionType.REQUIRED_AUTHORIZATION:
				return extend(state, {
					authorizationStatus: action.payload,
				})

			case ActionType.LOAD_USER_DATA:
				return extend(state, {
					userData: action.payload,
				})
			case ActionType.LOG_OUT:
				return extend(state, {
					authorizationStatus: AuthorizationStatus.NO_AUTH,
					userData: initialState.userData,
				})
		}

		return state
	}
}

export { user }
