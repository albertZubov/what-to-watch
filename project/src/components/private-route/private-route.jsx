import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AuthorizationStatus, AppClient } from '../../const/const'
import { getAuthorizationStatus } from '../../store/selectors'

const PrivateRoute = ({ render, path, exact, authorizationStatus }) => {
	return (
		<Route
			exact={exact}
			path={path}
			render={() =>
				authorizationStatus === AuthorizationStatus.AUTH ? (
					render()
				) : (
					<Redirect to={AppClient.LOGIN} />
				)
			}
		/>
	)
}

PrivateRoute.propTypes = {
	authorizationStatus: PropTypes.string.isRequired,
	render: PropTypes.func.isRequired,
	path: PropTypes.string.isRequired,
	exact: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
	authorizationStatus: getAuthorizationStatus(state),
})

export default connect(mapStateToProps)(PrivateRoute)
