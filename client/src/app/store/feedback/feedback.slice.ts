import { IFeedback, IFeedbackState } from './feedback.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IFeedbackState = {
	feedbackPosts: [
		{
			_id: '',
			title: '',
			text: '',
			username: '',
			date: '',
			userId: '',
		},
	],
}

export const feedbackSlice = createSlice({
	name: 'feedback',
	initialState,
	reducers: {
		getFeedback: (state, action: PayloadAction<IFeedback>) => {
			state.push(action.payload)
		},
		addFeedback: (state, action: PayloadAction<IFeedback>) => {
			state.push(action.payload)
		},
		editFeedback: (state, action: PayloadAction<IFeedback>) => {
			state.push(action.payload)
		},
		deleteFeedback: (state, action: PayloadAction<IFeedback>) => {
			state.push(action.payload)
		},
	},
})

export default feedbackSlice.reducer

export const feedbackReducer = feedbackSlice.reducer
export const feedbackActions = feedbackSlice.actions

// case FeedbackActionsTypes.ADD_FEEDBACK:
// 	return {
// 		...state,
// 		feedbackPosts: [...state.feedbackPosts, { ...action.payload }],
// 	}
// case FeedbackActionsTypes.EDIT_FEEDBACK:
// 	index = state.feedbackPosts.findIndex(
// 		faq => faq._id === action.payload._id
// 	)
// 	newArray = [...state.feedbackPosts]
// 	newArray[index] = action.payload
// 	return {
// 		...state,
// 		feedbackPosts: newArray,
// 	}
