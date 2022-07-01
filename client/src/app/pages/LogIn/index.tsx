import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { Header } from 'app/components'
import { UserActions } from 'app/actions'
import { RootState } from 'app/reducers'
import { LoginSchema } from './validation'

// import facebookIcon from 'assets/img/facebook-icon-login.svg'
// import googleIcon from 'assets/img/google-icon-login.svg'

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
		},
		validationSchema: LoginSchema,
		onSubmit: values => {
			// dispatch(UserActions.LogIn(values.username, values.password))
			UserActions.LogIn(values.username, values.password)
			navigate('/main', { replace: true })
		},
	})
	return (
		<div className='login'>
			<div className='login__wrapper'>
				<div className='login__header'>VPNUFO</div>
				<div className='login__title'>Sign up for free to start use VPN.</div>
				<div className='login__social'>
					<div className='login__social-btn login__social-facebook '>
						{/* <img
							src={facebookIcon}
							alt='facebook-icon'
							height={'24px'}
							width={'24px'}
						/> */}
						Sign up with facebook
					</div>
					<div className='login__social-btn login__social-google'>
						{/* <img
							src={facebookIcon}
							alt='facebook-icon'
							height={'24px'}
							width={'24px'}
						/> */}
						Sign up with facebook
					</div>
				</div>
				<div className='login__divider'>or</div>
				<div className='login__form'>
					<div className='login__form__main-title'>
						Sign up with your email address
					</div>
					<div className='login__form-title'>What's your email?</div>
					<div className='login__form-title'>Create a password</div>
					<div className='login__form-title'>Confirm your password</div>
					<div className='login__form-title'>What should we call you?</div>
				</div>
			</div>

			<form className='login__form' onSubmit={formik.handleSubmit} noValidate>
				<div className='login__title'>Sign In</div>

				<input
					className='login__input'
					placeholder='Username...'
					name='username'
					type='text'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.username}
				/>
				<input
					className='login__input'
					placeholder='Password...'
					name='password'
					type='password'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>

				<button type='submit' className='login__button btn-login submit'>
					Sign In
				</button>
				<Link to='/registration' className='login__button btn-reg'>
					Dont have account? Register
				</Link>
				<Link to='/restorepass' className='login__button btn-restorepass'>
					Forgot your password?
				</Link>
			</form>
		</div>
	)
}
