import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

type RequreAuthorizationActionType = {
	type: string
	payload: string
}

interface apiType {
	api: AxiosInstance
	mockApi: AxiosInstance
}

const BACKEND_URL = 'https://11.react.pages.academy/wtw'
const BACKEND_MOCK_URL = 'https://json-server-bd.glitch.me'
const REQUEST_TIMEOUT = 5000

const HttpCode = {
	UNAUTHORIZED: 401,
}

const token = localStorage.getItem('token') ?? ''

export const createAPI = (
	onUnauthorized: () => RequreAuthorizationActionType
): apiType => {
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

	const onSuccess = (response: AxiosResponse) => response

	const onFail = (err: AxiosError<{ error: string }>) => {
		const { response } = err
		// console.log('onFail', err)

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
