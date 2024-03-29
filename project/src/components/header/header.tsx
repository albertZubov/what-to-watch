import React, { useCallback } from 'react'
import cl from 'classnames'
import { Link } from 'react-router-dom'
import { AppClient, AuthorizationStatus } from '../../const/const'
import { getAuthorizationStatus, getUserData } from '../../store/selectors'
import { logOutAction } from '../../store/api-actions'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { State } from '../../types/state'

type PropsType = {
	clHeader: string
	children?: React.ReactNode
}

const Header = ({ clHeader, children }: PropsType): JSX.Element => {
	const dispatch = useAppDispatch()
	const { avatarUrl } = useAppSelector((state: State) => getUserData(state))
	const authorizationStatus = useAppSelector((state: State) =>
		getAuthorizationStatus(state)
	)

	const handleSubmitLogOut = useCallback(() => {
		if (authorizationStatus === AuthorizationStatus.AUTH) {
			dispatch(logOutAction())
		}
	}, [])

	return (
		<header className={cl('page-header', clHeader)}>
			<div className='logo'>
				<Link className='logo__link' to={AppClient.ROOT}>
					<span className='logo__letter logo__letter--1'>W</span>
					<span className='logo__letter logo__letter--2'>T</span>
					<span className='logo__letter logo__letter--3'>W</span>
				</Link>
			</div>
			{children}
			<ul className='user-block'>
				<li className='user-block__item'>
					<Link
						to={
							authorizationStatus === AuthorizationStatus.NO_AUTH
								? AppClient.LOGIN
								: AppClient.MY_LIST
						}
					>
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

export default Header
