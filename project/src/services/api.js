import axios from 'axios'

const BACKEND_URL = 'https://7.react.pages.academy/wtw'
const BACKEND_MOCK_URL = 'http://localhost:3000/'
const REQUEST_TIMEOUT = '5000'

const HttpCode = {
	UNAUTHORIZED: 401,
}

const token = localStorage.getItem('token') ?? ''

export const createAPI = (onUnauthorized) => {
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
		withCredentials: true,
	})

	const onSuccess = (response) => response

	const onFail = (err) => {
		const { response } = err

		if (response.status === HttpCode.UNAUTHORIZED) {
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
