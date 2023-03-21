import MockAdapter from 'axios-mock-adapter'
import { AppRoute } from '../const/const'
import { createAPI } from '../services/api'
import { checkAuthAction, logInAction } from './api-actions'
import thunk from 'redux-thunk'
import { configureMockStore } from '@jedmao/redux-mock-store'

describe('Async operations', () => {
	const { api } = createAPI()
	const apiMock = new MockAdapter(api)
	const middlewares = [thunk.withExtraArgument({ api })]

	const mockStore = configureMockStore(middlewares)

	it('should authorization status is «auth» when server return 200', async () => {
		const store = mockStore()
		apiMock.onGet(AppRoute.LOGIN).reply(200, [])

		expect(store.getActions()).toEqual([])

		await store.dispatch(checkAuthAction())

		const actions = store.getActions().map(({ type }) => type)

		expect(actions).toEqual([
			checkAuthAction.pending.type,
			checkAuthAction.fulfilled.type,
		])
	})

	it.only('should dispatch RequriedAuthorization when POST /login', async () => {
		const fakeUser = { login: 'test@test.ru', password: '123456' }
		const store = mockStore()
		Storage.prototype.setItem = jest.fn()

		apiMock.onPost(AppRoute.LOGIN).reply(200, {
			token: 'secret',
		})

		await store.dispatch(logInAction(fakeUser))

		const actions = store.getActions().map(({ type }) => type)

		expect(actions).toEqual([
			logInAction.pending.type,
			logInAction.fulfilled.type,
		])

		expect(Storage.prototype.setItem).toBeCalledTimes(1)
		expect(Storage.prototype.setItem).toBeCalledWith('token', 'secret')
	})
})
