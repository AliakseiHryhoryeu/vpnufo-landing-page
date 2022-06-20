import axios from 'axios'
import { UserActionsTypes } from 'app/models'

import config from 'assets/config.json'

export namespace UserActions {
	export enum Type {
		SET_USER = 'USER/SET_USER',
		LOGOUT = 'USER/LOGOUT',
		SETTINGS_SHOW = 'USER/SETTINGS_SHOW',
		SETTINGS_HIDE = 'USER/SETTINGS_HIDE',
		SET_ACTIVE_USERICON = 'USER/SET_ACTIVE_USERICON',
		ALERT_SHOW = 'USER/ALERT_SHOW',
		ALERT_HIDE = 'USER/ALERT_HIDE',
	}

	export function auth() {
		return async dispatch => {
			try {
				const response = await axios.get(config.proxy + `api/auth/auth`, {
					headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
				})
				dispatch(setUser(response.data.user))
				localStorage.setItem('token', response.data.token)
			} catch (e) {
				console.log(e.response.data.message)
			}
		}
	}

	export function LogIn(username, password) {
		return async dispatch => {
			try {
				const response = await axios.post(config.proxy + `api/auth/login`, {
					username: username,
					password: password,
				})
				dispatch(setUser(response.data.user))
				localStorage.setItem('token', response.data.token)
			} catch (e) {
				alert(e.response.data.message)
			}
		}
	}

	export async function signUp(username, email, password) {
		try {
			const response = await axios.post(config.proxy + `api/auth/signup`, {
				username,
				email,
				password,
			})
			alert(response.data.message)
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	export function setUser(user) {
		return {
			type: Type.SET_USER,
			payload: user,
		}
	}
	export function logout() {
		return {
			type: Type.LOGOUT,
		}
	}
}
