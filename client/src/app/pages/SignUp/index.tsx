import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { UserActions } from 'app/actions'
import { Header } from 'app/components'
import { RootState } from 'app/reducers'
import { signUpSchema } from './validation'

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
			username: '',
			email: '',
			password: '',
			repeatPassword: '',
		},
		validationSchema: signUpSchema,
		onSubmit: values => {
			UserActions.signUp(values.username, values.email, values.password)
		},
	})
	return (
		<div className='signup'>
			<Header />
			<div className='signup__container'>
				<form
					className='signup__form'
					onSubmit={formik.handleSubmit}
					noValidate
				>
					<div className='signup__title'>signup</div>

					<input
						className='signup__input'
						placeholder='User name...'
						name='username'
						type='text'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.username}
					/>
					<input
						className='signup__input'
						placeholder='Email Adress...'
						name='email'
						type='text'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					<input
						className='signup__input'
						placeholder='Password...'
						name='password'
						type='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
					<input
						className='signup__input'
						placeholder='Repeat your password...'
						name='repeatPassword'
						type='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.repeatPassword}
					/>

					<button type='submit' className='signup__button-reg'>
						Register
					</button>
					<Link to='/auth' className='signup__button-signIn'>
						Alredy have account? Sign in
					</Link>
				</form>
			</div>
		</div>
	)
}
