import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import { fetchFilmsList } from './store/api-actions'
import rootReducer from './store/reducers/root'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createAPI } from './services/api'

const api = createAPI()

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
)

store
	.dispatch(fetchFilmsList())
	.then(() => {
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			document.getElementById('root')
		)
	})
	.catch(console.error)
