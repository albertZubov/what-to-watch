import React from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AppClient } from '../../const/const'
import { connect } from 'react-redux'
import { getUserData } from '../../store/selectors'
import { propUser } from '../../props/props'

const Header = ({ clHeader, children, userData }) => {
	const { avatarUrl, email } = userData
	const showName = email ? email : 'Sign in'

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
					<div className='user-block__avatar'>
						<img src={avatarUrl} alt='User avatar' width='63' height='63' />
					</div>
				</li>
				<li className='user-block__item'>
					<Link className='user-block__link' to={AppClient.LOGIN}>
						{showName}
					</Link>
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
}

const mapStateToProps = (state) => ({
	userData: getUserData(state),
})

export default connect(mapStateToProps)(Header)
