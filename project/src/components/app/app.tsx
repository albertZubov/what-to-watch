import React from 'react'
import Main from '../main/main'
import FilmCard from '../film-card/film-card'
import { AppClient, AuthorizationStatus } from '../../const/const'
import { Route, Routes } from 'react-router-dom'
import AddReview from '../add-review/add-review'
import { Link } from 'react-router-dom'
import MyList from '../my-list/my-list'
import SignIn from '../sign-in/sign-in'
import Player from '../player/player'
import PrivateRoute from '../private-route/private-route'
import HistoryRouter from '../history-route/history-route'
import browserHistory from '../../browser-history'
import { useSelector } from 'react-redux'
import { StateType } from '../../types/types'

const App = () => {
	const authorizationStatus = useSelector(
		(state: StateType) => state.USER.authorizationStatus
	)

	return (
		<HistoryRouter history={browserHistory}>
			<Routes>
				<Route path={AppClient.ROOT}>
					<Route index element={<Main />} />
					<Route path={AppClient.ADD_REVIEW_ID} element={<AddReview />} />
					<Route path={AppClient.FILM_ID} element={<FilmCard />} />
					<Route path={AppClient.LOGIN} element={<SignIn />} />
					<Route path={AppClient.PLAYER_ID} element={<Player />} />
					<Route
						path='*'
						element={
							<>
								<h1>404 Page not found</h1> <Link to='/'>Go to main page</Link>
							</>
						}
					/>
					<Route
						path={AppClient.MY_LIST}
						element={
							<PrivateRoute authorizationStatus={authorizationStatus}>
								<MyList />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</HistoryRouter>
	)
}

export default App
