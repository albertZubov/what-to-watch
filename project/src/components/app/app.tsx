import React from 'react'
import Main from '../main/main'
import FilmCard from '../film-card/film-card'
import { AppClient } from '../../const/const'
import {
	Router as BrowserRouter,
	Switch,
	Route,
	RouteComponentProps,
} from 'react-router-dom'
import AddReview from '../add-review/add-review'
import MyList from '../my-list/my-list'
import SignIn from '../sign-in/sign-in'
import Player from '../player/player'
import browserHistory from '../../browser-history'
import PrivateRoute from '../private-route/private-route'

type TParams = { id: string }

const App = () => {
	return (
		<BrowserRouter history={browserHistory}>
			<Switch>
				<Route exact path={AppClient.ROOT} component={Main} />
				<Route
					exact
					path={AppClient.ADD_REVIEW_ID}
					render={({ match }: RouteComponentProps<TParams>): JSX.Element => (
						<AddReview activeId={+match.params.id} />
					)}
				/>
				<Route
					exact
					path={AppClient.FILM_ID}
					render={({ match }) => <FilmCard activeId={+match.params.id} />}
				/>
				<PrivateRoute
					exact
					path={AppClient.MY_LIST}
					render={() => <MyList />}
				/>
				<Route exact path={AppClient.LOGIN} render={() => <SignIn />} />
				<Route
					exact
					path={AppClient.PLAYER_ID}
					render={({ match }) => <Player activeId={+match.params.id} />}
				/>
				<Route path='*'>404 Not Found</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
