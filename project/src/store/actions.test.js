import { AuthorizationStatus } from '../const/const'
import { ActionCreator, ActionType } from './action'

describe('Actions', () => {
	it('Возвращает текущий жанр', () => {
		const expectedAction = {
			type: ActionType.GENRE_SELECTION,
			payload: 'All genres',
		}
		expect(ActionCreator.changeGenre(`All genres`)).toEqual(expectedAction)
	})

	it('Загружает данные пользователя', () => {
		const userData = {
			id: 0,
			email: '',
			name: 'Victor',
			avatarUrl: '../img/avatar.jpg',
			token: '',
		}

		const expectedAction = {
			type: ActionType.LOAD_USER_DATA,
			payload: userData,
		}

		expect(ActionCreator.loadUserData(userData)).toEqual(expectedAction)
	})

	it('Проверка авторизации пользователя', () => {
		const expectedAction = {
			type: ActionType.REQUIRED_AUTHORIZATION,
			payload: AuthorizationStatus.NO_AUTH,
		}

		expect(
			ActionCreator.requreAuthorization(AuthorizationStatus.NO_AUTH)
		).toEqual(expectedAction)
	})
})
