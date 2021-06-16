import React from 'react'
import cl from 'classnames'
import PropTypes from 'prop-types'

const Header = ({ clHeader, children }) => {
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
						<img
							src='img/avatar.jpg'
							alt='User avatar'
							width='63'
							height='63'
						/>
					</div>
				</li>
				<li className='user-block__item'>
					<a className='user-block__link'>Sign out</a>
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
	]).isRequired,
}

export default Header
