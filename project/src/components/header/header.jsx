import React, { useCallback } from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AppClient, AuthorizationStatus } from '../../const/const'
import { connect } from 'react-redux'
import { getAuthorizationStatus, getUserData } from '../../store/selectors'
import { propUser } from '../../props/props'
import { logout } from '../../store/api-actions'

const Header = ({
	clHeader,
	children,
	userData,
	authorizationStatus,
	logOut,
}) => {
	const { avatarUrl } = userData
	const handleSubmitLogOut = useCallback(() => {
		if (authorizationStatus === AuthorizationStatus.AUTH) {
			logOut()
		}
	}, [])

	return (
		<header className={cl('page-header', clHeader)}>
			<div className='logo'>
				<a className='logo__link'>
					<span className='logo__letter logo__letter--1'>W</span>
					<span className='logo__letter logo__letter--2'>T</span>
					<span className='logo__letter logo__letter--3'>W</span>
				</a>
			</div>
			{children}
			<ul className='user-block'>
				<li className='user-block__item'>
					<Link to={AppClient.MY_LIST}>
						<div className='user-block__avatar'>
							<img src={avatarUrl} alt='User avatar' width='63' height='63' />
						</div>
					</Link>
				</li>
				<li className='user-block__item'>
					{authorizationStatus === AuthorizationStatus.NO_AUTH ? (
						<Link className='user-block__link' to={AppClient.LOGIN}>
							Sign in
						</Link>
					) : (
						<button className='user-block__link' onClick={handleSubmitLogOut}>
							Sign out
						</button>
					)}
				</li>
			</ul>
		</header>
	)
}

Header.propTypes = {
	clHeader: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	userData: PropTypes.shape(propUser),
	authorizationStatus: PropTypes.string.isRequired,
	logOut: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	userData: getUserData(state),
	authorizationStatus: getAuthorizationStatus(state),
})

const mapDispatchToProps = (dispatch) => ({
	logOut: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
