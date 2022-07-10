import { IFaqState, IFAQ } from './faq.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IFaqState = {
	faqPosts: [
		{
			_id: '',
			title: '',
			text: '',
			userId: '',
		},
	],
}

export const faqSlice = createSlice({
	name: 'faq',
	initialState,
	reducers: {
		getFaq: (state, action: PayloadAction<IFAQ>) => {
			state.push(action.payload)
		},
		addFaq: (state, action: PayloadAction<IFAQ>) => {
			state.push(action.payload)
		},
		editFaq: (state, action: PayloadAction<IFAQ>) => {
			state.push(action.payload)
		},
		deleteFaq: (state, action: PayloadAction<IFAQ>) => {
			state.push(action.payload)
		},
	},
})

export const faqReducer = faqSlice.reducer
export const faqActions = faqSlice.actions

// export const faqReducer = (state = initialState, action) => {
// 	let index
// 	let newArray

// 	switch (action.type) {
// 		case FaqActionsTypes.GET_FAQ:
// 			return {
// 				...state,
// 				faqPosts: action.payload,
// 			}

// 		case FaqActionsTypes.ADD_FAQ:
// 			return {
// 				...state,
// 				faqPosts: [...state.faqPosts, { ...action.payload }],
// 			}
// 		case FaqActionsTypes.EDIT_FAQ:
// 			index = state.faqPosts.findIndex(faq => faq._id === action.payload._id)
// 			newArray = [...state.faqPosts]
// 			newArray[index] = action.payload
// 			return {
// 				...state,
// 				faqPosts: newArray,
// 			}

// 		case FaqActionsTypes.DELETE_FAQ:
// 			return {
// 				...state,
// 				faqPosts: action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
