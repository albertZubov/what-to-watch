import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import { checkAuth, fetchFilmsList } from './store/api-actions'
import rootReducer from './store/reducers/root'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createAPI } from './services/api'
import { ActionCreator } from './store/action'
import { AuthorizationStatus } from './const/const'

const api = createAPI(() =>
	store.dispatch(ActionCreator.requreAuthorization(AuthorizationStatus.NO_AUTH))
)

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
)

Promise.all([store.dispatch(fetchFilmsList()), store.dispatch(checkAuth())])
	.then(() => {
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			document.getElementById('root')
		)
	})
	.catch(console.error)
