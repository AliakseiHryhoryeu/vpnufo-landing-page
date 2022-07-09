import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { UserActions } from 'app/store/actions'
import { RootState } from 'app/store/reducers'
import { LoginSchema } from './validation'

import facebookIcon from 'assets/img/facebook-icon-signup.svg'
import googleIcon from 'assets/img/google-icon-signup.svg'
import warningIcon from 'assets/img/warning-icon-signup.svg'

import './Login.scss'

export const Login: FC = () => {
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
			username: '',
			password: '',
			remember: '',
		},
		validationSchema: LoginSchema,
		onSubmit: values => {
			// dispatch(UserActions.LogIn(values.username, values.password))
			UserActions.LogIn(values.username, values.password)
		},
	})
	return (
		<div className='login'>
			<div className='login__header'>
				<Link to='/'>VPNUFO</Link>
			</div>
			<div className='login__title'>Sign up for free to start use VPN.</div>
			<div className='login__wrapper'>
				<div className='login__social'>
					<div className='login__social-btn login__social-facebook '>
						<img
							src={facebookIcon}
							alt='facebook-icon'
							height={'24px'}
							width={'24px'}
						/>
						Continue with facebook
					</div>
					<div className='login__social-btn login__social-google'>
						<img
							src={googleIcon}
							alt='google-icon'
							height={'24px'}
							width={'24px'}
						/>
						Continue with google
					</div>
				</div>
				<div className='login__divider'>
					<span>or</span>
				</div>
				<form className='login__form' onSubmit={formik.handleSubmit} noValidate>
					<div className='login__form__main-title'>
						Sign up with your email address
					</div>
					<div className='login__form-wrapper'>
						<div className='login__form-title'>Email address or username</div>
						<input
							className='login__form-input'
							placeholder='Email address or username.'
							name='username'
							type='text'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.username}
						/>
					</div>
					<div className='login__form-wrapper'>
						<div className='login__form-title'>Password</div>
						<input
							className='login__form-input'
							placeholder='Password.'
							name='password'
							type='password'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
						<div className='login__form-subtitle'>
							<Link to='/password-reset'>Forgot your password?</Link>
						</div>
					</div>
					<div className='login__auth'>
						<div className='login__form-checkbox'>
							<input
								className='login__form-check'
								name='marketing'
								type='checkbox'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.remember}
							/>
							<div className='login__form-title'>Remember me</div>
						</div>
						<button type='submit' className='login__form-button-login'>
							log in
						</button>
					</div>
					<div className='login__donthave__title'>Don’t have an account?</div>

					<Link className='login__donthave__button' to='/signup'>
						Sign up for vpnufo
					</Link>
				</form>
			</div>
		</div>
	)
}
