import { RootState } from '../state'
import { UserActionsTypes } from 'app/models'

const defaultState: RootState.UserState = {
	activeUser: {
		userId: '',
		username: '',
		faqId: [],
		feedbacksId: [],
	},
	isAuth: false,
}

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case UserActionsTypes.SET_USER:
			return {
				...state,
				activeUser: action.payload,
				isAuth: true,
			}
		case UserActionsTypes.LOGOUT:
			localStorage.removeItem('token')
			return {
				...state,
				activeUser: [],
				isAuth: false,
			}
		default:
			return state
	}
}
