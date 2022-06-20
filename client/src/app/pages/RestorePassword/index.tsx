import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Header } from 'app/components'
import { RootState } from 'app/reducers'

import './RestorePassword.scss'

export const RestorePassword: FC = () => {
	const navigate = useNavigate()
	const { isAuth } = useSelector((state: RootState) => {
		return {
			isAuth: state.user.isAuth,
		}
	})

	if (isAuth === true) {
		navigate('/main', { replace: true })
	}

	return (
		<div className='restorepass'>
			<Header />
			<div className='restorepass__container'>
				<div className='restorepass__form'>
					<div className='restorepass__title'>Restore Password</div>

					<input
						className='restorepass__input'
						type='text'
						placeholder='Email Adress...'
					/>

					<a href='' className='restorepass__button-reg'>
						Restore Password
					</a>
					<Link to='/auth' className='restorepass__button-signIn'>
						Alredy have account? Sign in
					</Link>
				</div>
			</div>
		</div>
	)
}
