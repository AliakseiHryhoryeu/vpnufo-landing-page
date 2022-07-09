import { RootState } from '../state'
import { FeedbackActionsTypes } from 'app/models'

const defaultState: RootState.FeedbackState = {
	feedbackPosts: [],
}

export const feedbackReducer = (state = defaultState, action) => {
	let index
	let newArray

	switch (action.type) {
		case FeedbackActionsTypes.GET_FEEDBACK:
			return {
				...state,
				feedbackPosts: action.payload,
			}

		case FeedbackActionsTypes.ADD_FEEDBACK:
			return {
				...state,
				feedbackPosts: [...state.feedbackPosts, { ...action.payload }],
			}
		case FeedbackActionsTypes.EDIT_FEEDBACK:
			index = state.feedbackPosts.findIndex(
				faq => faq._id === action.payload._id
			)
			newArray = [...state.feedbackPosts]
			newArray[index] = action.payload
			return {
				...state,
				feedbackPosts: newArray,
			}

		case FeedbackActionsTypes.DELETE_FEEDBACK:
			return {
				...state,
				feedbackPosts: action.payload,
			}
		default:
			return state
	}
}
