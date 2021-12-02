import axios, { AxiosError, AxiosResponse } from 'axios'
import { RequreAuthorizationActionType } from '../store/action'

const BACKEND_URL = 'https://7.react.pages.academy/wtw'
const BACKEND_MOCK_URL = 'https://json-server-bd.glitch.me'
const REQUEST_TIMEOUT = 5000

const HttpCode = {
	UNAUTHORIZED: 401,
}

const token = localStorage.getItem('token') ?? ''

export const createAPI = (
	onUnauthorized: () => RequreAuthorizationActionType
) => {
	const api = axios.create({
		baseURL: BACKEND_URL,
		timeout: REQUEST_TIMEOUT,
		withCredentials: true,
		headers: {
			'x-token': token,
		},
	})

	const mockApi = axios.create({
		baseURL: BACKEND_MOCK_URL,
		timeout: REQUEST_TIMEOUT,
	})

	const onSuccess = (response: AxiosResponse<any>) => response

	const onFail = (err: AxiosError<any>) => {
		const { response } = err

		if (response && response.status === HttpCode.UNAUTHORIZED) {
			onUnauthorized()
			throw err
		}
		throw err
	}

	api.interceptors.response.use(onSuccess, onFail)
	mockApi.interceptors.response.use(onSuccess, onFail)

	return {
		api,
		mockApi,
	}
}
