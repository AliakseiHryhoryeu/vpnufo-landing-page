import { IUser, IUserState } from './user.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IUserState = {
	activeUser: {
		userId: '',
		username: '',
		feedbacksId: [],
		faqId: [],
	},
	isAuth: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getFaq: (state, action: PayloadAction<IUser>) => {
			state.push(action.payload)
		},
		addFaq: (state, action: PayloadAction<IUser>) => {
			state.push(action.payload)
		},
		editFaq: (state, action: PayloadAction<IUser>) => {
			state.push(action.payload)
		},
		deleteFaq: (state, action: PayloadAction<IUser>) => {
			state.push(action.payload)
		},
	},
})

export default userSlice.reducer

// case UserActionsTypes.SET_USER:
// 	return {
// 		...state,
// 		activeUser: action.payload,
// 		isAuth: true,
// 	}
// case UserActionsTypes.LOGOUT:
// 	localStorage.removeItem('token')
// 	return {
// 		...state,
// 		activeUser: [],
// 		isAuth: false,
// 	}
