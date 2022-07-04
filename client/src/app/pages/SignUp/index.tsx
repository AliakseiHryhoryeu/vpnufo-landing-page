import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { UserActions } from 'app/actions'
import { Header } from 'app/components'
import { RootState } from 'app/reducers'
import { signUpSchema } from './validation'

import facebookIcon from 'assets/img/facebook-icon-signup.svg'
import googleIcon from 'assets/img/google-icon-signup.svg'
import warningIcon from 'assets/img/warning-icon-signup.svg'

import './SignUp.scss'

export const SignUp: FC = () => {
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
			email: '',
			password: '',
			confirmPassword: '',
			username: '',
			marketing: 'false',
			rights: 'false',
		},
		validationSchema: signUpSchema,
		onSubmit: values => {
			UserActions.signUp(values.username, values.email, values.password)
		},
	})
	return (
		<div className='signup'>
			<div className='signup__header'>
				<Link to='/'>VPNUFO</Link>
			</div>
			<div className='signup__title'>Sign up for free to start use VPN.</div>
			<div className='signup__wrapper'>
				<div className='signup__social'>
					<div className='signup__social-btn signup__social-facebook '>
						<img
							src={facebookIcon}
							alt='facebook-icon'
							height={'24px'}
							width={'24px'}
						/>
						Sign up with facebook
					</div>
					<div className='signup__social-btn signup__social-google'>
						<img
							src={googleIcon}
							alt='google-icon'
							height={'24px'}
							width={'24px'}
						/>
						Sign up with facebook
					</div>
				</div>
				<div className='signup__divider'>
					<span>or</span>
				</div>
				<form
					className='signup__form'
					onSubmit={formik.handleSubmit}
					noValidate
				>
					<div className='signup__form__main-title'>
						Sign up with your email address
					</div>
					<div className='signup__form-wrapper'>
						<div className='signup__form-title'>What's your email?</div>
						<input
							className='signup__form-input'
							placeholder='Enter your email.'
							name='email'
							type='text'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>
					</div>
					<div className='signup__form-wrapper'>
						<div className='signup__form-title'>Create a password</div>
						<input
							className='signup__form-input'
							placeholder='Create a password.'
							name='password'
							type='password'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
					</div>
					<div className='signup__form-wrapper'>
						<div className='signup__form-title'>Confirm your password</div>
						<input
							className='signup__form-input'
							placeholder='Enter your password again.'
							name='confirmPassword'
							type='password'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.confirmPassword}
						/>
					</div>
					<div className='signup__form-wrapper'>
						<div className='signup__form-title'>What should we call you?</div>
						<input
							className='signup__form-input'
							placeholder='Enter a profile name.'
							name='username'
							type='text'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.username}
						/>
					</div>
					<div className='signup__form-checkbox'>
						<input
							className='signup__form-check'
							name='marketing'
							type='checkbox'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.marketing}
						/>
						<div className='signup__form-title'>
							I would prefer not to receive marketing messages from VPNUFO
						</div>
					</div>
					<div className='signup__form-checkbox'>
						<input
							className='signup__form-check'
							name='rights'
							type='checkbox'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.rights}
						/>
						<div className='signup__form-title'>
							I agree to the<span>VPNUFO Terms and Conditions of Use</span>
							and<span>Privacy Policy.</span>
						</div>
					</div>
					<div className='signup__form-warning'>
						<img
							className='signup__form-warning-img'
							src={warningIcon}
							alt='warning-icon'
							width={'16px'}
							height={'16px'}
						/>
						<div className='signup__form-title'>
							Please accept the terms and conditions to continue.
						</div>
					</div>
					<button type='submit' className='signup__form-button-signup'>
						Sign up
					</button>
					<div className='signup__button-login'>
						Have an account?
						<Link to='/auth'>Log in</Link>
					</div>
				</form>
			</div>
		</div>
	)
}
