import React from 'react'
import { AuthorizationStatus, AppClient } from '../../const/const'
import { Navigate } from 'react-router-dom'

type propsType = {
	authorizationStatus: string
	children: JSX.Element
}

const PrivateRoute = ({
	authorizationStatus,
	children,
}: propsType): JSX.Element => {
	return authorizationStatus === AuthorizationStatus.AUTH ? (
		children
	) : (
		<Navigate to={AppClient.LOGIN} />
	)
}

export default PrivateRoute
