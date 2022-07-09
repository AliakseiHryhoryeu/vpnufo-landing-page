import axios from 'axios'

const serverIp = process.env.SERVER_IP

export namespace UserActions {
	export enum Type {
		SET_USER = 'USER/SET_USER',
		LOGOUT = 'USER/LOGOUT',
	}
	export function auth() {
		return async dispatch => {
			try {
				const response = await axios.get(serverIp + `api/auth/auth`, {
					headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
				})
				dispatch(setUser(response.data.user))
				localStorage.setItem('token', response.data.token)
			} catch (e) {
				console.log(e.response.data.message)
			}
		}
	}

	export function LogIn(username: string, password: string) {
		return async dispatch => {
			try {
				const response = await axios.post(serverIp + `api/auth/login`, {
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
			const response = await axios.post(serverIp + `api/auth/signup`, {
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
