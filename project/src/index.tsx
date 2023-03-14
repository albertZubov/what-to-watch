import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import {
	checkAuthAction,
	fetchFilmsListAction,
	fetchPromoFilmsAction,
} from './store/api-actions'
import { rootReducer } from './store/reducers/root'
import { Provider } from 'react-redux'
import { createAPI } from './services/api'
import { requreAuthorization } from './store/reducers/user'
import { AuthorizationStatus } from './const/const'
import { configureStore } from '@reduxjs/toolkit'

const api = createAPI(() =>
	store.dispatch(requreAuthorization(AuthorizationStatus.NO_AUTH))
)

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}),
})

Promise.all([
	store.dispatch(fetchFilmsListAction()),
	store.dispatch(checkAuthAction()),
	store.dispatch(fetchPromoFilmsAction()),
])
	.then(() => {
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			document.getElementById('root')
		)
	})
	.catch(console.error)
