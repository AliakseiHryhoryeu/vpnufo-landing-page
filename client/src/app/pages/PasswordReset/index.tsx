import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { UserActions } from 'app/actions'

import { RootState } from 'app/reducers'
import { PassResetSchema } from './validation'

import facebookIcon from 'assets/img/facebook-icon-signup.svg'
import googleIcon from 'assets/img/google-icon-signup.svg'

import './PasswordReset.scss'

export const PasswordReset: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isAuth } = useSelector((state: RootState) => {
		return {
			isAuth: state.user.isAuth,
		}
	})
	if (isAuth === true) {
		navigate('/main', { replace: true })
	}

	const formik = useFormik({
		initialValues: {
			usernameOrEmail: '',
			password: '',
			remember: '',
		},
		validationSchema: PassResetSchema,
		onSubmit: values => {
			// dispatch(UserActions.PassReset(values.username, values.password))
			// UserActions.PassReset(values.usernameOrEmail, values.password)
			navigate('/main', { replace: true })
		},
	})
	return (
		<div className='PassReset'>
			<div className='PassReset__header'>
				<Link to='/'>VPNUFO</Link>
			</div>
			<div className='PassReset__title'>Password Reset</div>
			<div className='PassReset__subtitle'>
				Enter your <b>VPNUFO username</b> or the <b> email address</b> that you
				used to register. We'll send you an email with your username and a link
				to reset your password.
			</div>
			<div className='PassReset__wrapper'>
				<form
					className='PassReset__form'
					onSubmit={formik.handleSubmit}
					noValidate
				>
					<div className='PassReset__form-wrapper'>
						<div className='PassReset__form-title'>
							Email address or username
						</div>
						<input
							className='PassReset__form-input'
							placeholder='Email address or username.'
							name='text'
							type='text'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.usernameOrEmail}
						/>
					</div>
					<button type='submit' className='PassReset__form-button-PassReset'>
						Send
					</button>
					<div className='PassReset__help__title'>
						If you still need help, contact
						<Link to='/support'>VPNUFO Support</Link>.
					</div>
				</form>
			</div>
		</div>
	)
}
