import MockAdapter from 'axios-mock-adapter'
import { AppRoute } from '../const/const'
import { createAPI } from '../services/api'
import { ActionType } from './action'
import { commentsPost, favoritePost, fetchFilmsList } from './api-actions'

const api = createAPI(() => {})

describe('Async operations', () => {
	beforeAll(() => {
		api
	})

	it('Проверка корректности запроса POST/comments', () => {
		const apiMock = new MockAdapter(api)
		const dispatch = jest.fn()
		const fakeUser = { comment: 'test', rating: '8', id: 3 }
		const commentsLoader = commentsPost(
			fakeUser.comment,
			fakeUser.rating,
			fakeUser.id
		)

		apiMock
			.onPost(`${AppRoute.COMMENT}/${fakeUser.id}`)
			.reply(200, [{ fake: true }])

		return commentsLoader(dispatch, () => {}, api).then(() => {
			expect(dispatch).toHaveBeenCalledTimes(0)
		})
	})

	it('Проверка корректности запроса POST/FAVORITES', () => {
		const apiMock = new MockAdapter(api)
		const dispatch = jest.fn()
		const fakeFavorite = { id: 3, status: 1 }
		const favoriteLoader = favoritePost(fakeFavorite.id, fakeFavorite.status)

		apiMock
			.onPost(`${AppRoute.FAVORITES}/${fakeFavorite.id}/${fakeFavorite.status}`)
			.reply(200, { fake: true })

		return favoriteLoader(dispatch, () => {}, api).then(() => {
			expect(dispatch).toHaveBeenCalledTimes(1)
			expect(dispatch).toHaveBeenNthCalledWith(1, {
				type: ActionType.CHANGE_FAVORITE,
				payload: { fake: true },
			})
		})
	})

	it('Проверка корректности запроса GET/films', () => {
		const apiMock = new MockAdapter(api)
		const dispatch = jest.fn()
		const filmsLoader = fetchFilmsList()

		apiMock.onGet(AppRoute.FILMS).reply(200, [{ fake: true }])

		return filmsLoader(dispatch, () => {}, api).then(() => {
			expect(dispatch).toHaveBeenCalledTimes(1)
			expect(dispatch).toHaveBeenNthCalledWith(1, {
				type: ActionType.LOAD_FILMS,
				payload: [{ fake: true }],
			})
		})
	})
})
