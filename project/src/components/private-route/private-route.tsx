import React, { ComponentType } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AuthorizationStatus, AppClient } from '../../const/const'
import { getAuthorizationStatus } from '../../store/selectors'
import { StateType } from '../../types/types'

type propsType = {
	render: () => JSX.Element | undefined
	path: string
	exact: boolean | undefined
	authorizationStatus: string
}

const PrivateRoute: ComponentType<any> = ({
	render,
	path,
	exact,
	authorizationStatus,
}: propsType) => {
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

const mapStateToProps = (state: StateType) => ({
	authorizationStatus: getAuthorizationStatus(state),
})

export default connect(mapStateToProps)(PrivateRoute)
