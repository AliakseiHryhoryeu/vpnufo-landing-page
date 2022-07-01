import { RootState } from './state'
import { FaqActionsTypes } from 'app/models'

const defaultState: RootState.FaqState = {
	faqPosts: [],
}

export const faqReducer = (state = defaultState, action) => {
	let index
	let newArray

	switch (action.type) {
		case FaqActionsTypes.GET_FAQ:
			return {
				...state,
				faqPosts: action.payload,
			}

		case FaqActionsTypes.ADD_FAQ:
			return {
				...state,
				faqPosts: [...state.faqPosts, { ...action.payload }],
			}
		case FaqActionsTypes.EDIT_FAQ:
			index = state.faqPosts.findIndex(faq => faq._id === action.payload._id)
			newArray = [...state.faqPosts]
			newArray[index] = action.payload
			return {
				...state,
				faqPosts: newArray,
			}

		case FaqActionsTypes.DELETE_FAQ:
			return {
				...state,
				faqPosts: action.payload,
			}
		default:
			return state
	}
}
