import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { Header } from 'app/components'
import { UserActions } from 'app/actions'
import { RootState } from 'app/reducers'
import { LoginSchema } from './validation'

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
			dispatch(UserActions.LogIn(values.username, values.password))
			navigate('/main', { replace: true })
		},
	})
	return (
		<div className='login'>
			<Header />
			<div className='login__container'>
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
		</div>
	)
}
