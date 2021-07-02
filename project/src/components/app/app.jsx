import React from 'react'
import Main from '../main/main'
import FilmCard from '../film-card/film-card'
import { AppClient } from '../../const/const'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddReview from '../add-review/add-review'
import MyList from '../my-list/my-list'
import SignIn from '../sign-in/sign-in'
import Player from '../player/player'

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={AppClient.ROOT} render={() => <Main />} />
				<Route
					exact
					path={AppClient.ADD_REVIEW_ID}
					render={() => <AddReview />}
				/>
				<Route
					exact
					path={AppClient.FILM_ID}
					render={({ match }) => <FilmCard activeId={+match.params.id} />}
				/>
				<Route exact path={AppClient.MY_LIST} render={() => <MyList />} />
				<Route exact path={AppClient.LOGIN} render={() => <SignIn />} />
				<Route
					exact
					path={AppClient.PLAYER_ID}
					render={({ match }) => <Player activeId={+match.params.id} />}
				/>
				<Route path='*'>404</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
