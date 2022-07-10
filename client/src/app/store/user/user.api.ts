import { IUser } from './user.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useMemo } from 'react'
import { Dispatch, bindActionCreators } from 'redux'

import axios from 'axios'

const serverIp = process.env.SERVER_IP
const baseUrl = serverIp + 'api/lists/'

export const userApi = createApi({
	reducerPath: 'faqApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	endpoints: build => ({
		auth: build.query<IUser[], number>({
			query: () => `getFaq`,
		}),
		login: build.query<IUser[], string>({
			query: (title: string = '', text: string = '', userId: string = '') =>
				`getFaq?title=${title}&text=${text}&userId=${userId}`,
		}),
		signup: build.query<IUser[], string>({
			query: (faqId: string = '', title: string = '', text: string = '') =>
				`getFaq?faqId=${faqId}&title=${title}&text=${text}`,
		}),
		setUser: build.query<IUser[], string>({
			query: (faqId: string = '') => `getFaq?faqId=${faqId}`,
		}),
		logout: build.query<IUser[], string>({
			query: (faqId: string = '') => `getFaq?faqId=${faqId}`,
		}),
	}),
})

export const {
	useAuthQuery,
	useLoginQuery,
	useSignupQuery,
	useSetUserQuery,
	useLogoutQuery,
} = userApi

// export function auth() {
// 	return async dispatch => {
// 		try {
// 			const response = await axios.get(serverIp + `api/auth/auth`, {
// 				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
// 			})
// 			dispatch(setUser(response.data.user))
// 			localStorage.setItem('token', response.data.token)
// 		} catch (e) {
// 			console.log(e.response.data.message)
// 		}
// 	}
// }

// export function LogIn(username: string, password: string) {
// 	return async dispatch => {
// 		try {
// 			const response = await axios.post(serverIp + `api/auth/login`, {
// 				username: username,
// 				password: password,
// 			})
// 			dispatch(setUser(response.data.user))
// 			localStorage.setItem('token', response.data.token)
// 		} catch (e) {
// 			alert(e.response.data.message)
// 		}
// 	}
// }

// export async function signUp(username, email, password) {
// 	try {
// 		const response = await axios.post(serverIp + `api/auth/signup`, {
// 			username,
// 			email,
// 			password,
// 		})
// 		alert(response.data.message)
// 	} catch (e) {
// 		alert(e.response.data.message)
// 	}
// }

// export function setUser(user) {
// 	return {
// 		type: Type.SET_USER,
// 		payload: user,
// 	}
// }
// export function logout() {
// 	return {
// 		type: Type.LOGOUT,
// 	}
// }
