import React, { FormEvent, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AppClient } from '../../const/const'
import { useAppDispatch } from '../../hooks/hooks'
import { logInAction } from '../../store/api-actions'
import Footer from '../footer/footer'

const SignIn = (): JSX.Element => {
	const dispatch = useAppDispatch()
	const loginRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)

	const handleSubmit = (evt: FormEvent) => {
		evt.preventDefault()
		if (loginRef.current !== null && passwordRef.current !== null) {
			dispatch(
				logInAction({
					login: loginRef.current.value,
					password: passwordRef.current.value,
				})
			)
		}
	}

	return (
		<div className='user-page'>
			<header className='page-header user-page__head'>
				<div className='logo'>
					<Link to={AppClient.ROOT} className='logo__link'>
						<span className='logo__letter logo__letter--1'>W</span>
						<span className='logo__letter logo__letter--2'>T</span>
						<span className='logo__letter logo__letter--3'>W</span>
					</Link>
				</div>

				<h1 className='page-title user-page__title'>Sign in</h1>
			</header>

			<div className='sign-in user-page__content'>
				<form action='#' className='sign-in__form' onSubmit={handleSubmit}>
					<div className='sign-in__fields'>
						<div className='sign-in__field'>
							<input
								ref={loginRef}
								className='sign-in__input'
								type='email'
								placeholder='Email address'
								name='user-email'
								id='user-email'
							/>
							<label
								className='sign-in__label visually-hidden'
								htmlFor='user-email'
							>
								Email address
							</label>
						</div>
						<div className='sign-in__field'>
							<input
								ref={passwordRef}
								className='sign-in__input'
								type='password'
								placeholder='Password'
								name='user-password'
								id='user-password'
							/>
							<label
								className='sign-in__label visually-hidden'
								htmlFor='user-password'
							>
								Password
							</label>
						</div>
					</div>
					<div className='sign-in__submit'>
						<button className='sign-in__btn' type='submit'>
							Sign in
						</button>
					</div>
				</form>
			</div>

			<Footer />
		</div>
	)
}

export default SignIn
