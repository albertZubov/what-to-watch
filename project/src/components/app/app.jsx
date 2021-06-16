import React from 'react'
import Main from '../main/main'
import FilmCardDescription from '../film-card-description/film-card-description'
import { AppClient } from '../../const/const'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddReview from '../add-review/add-review'
import FilmList from '../film-list/film-list'
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
					render={() => <FilmCardDescription />}
				/>
				<Route exact path={AppClient.LIST_CARD} render={() => <FilmList />} />
				<Route exact path={AppClient.LOGIN} render={() => <SignIn />} />
				<Route exact path={AppClient.PLAYER_ID} render={() => <Player />} />
				<Route path='*'>404</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
