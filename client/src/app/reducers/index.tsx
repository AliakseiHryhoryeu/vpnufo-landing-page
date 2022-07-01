import { combineReducers } from 'redux'
import { RootState } from './state'
import { userReducer } from './user'
import { faqReducer } from './faq'
import { feedbackReducer } from './feedback'

export { type RootState }

export const rootReducer = combineReducers<RootState>({
	user: userReducer,
	faq: faqReducer,
	feedback: feedbackReducer,
})
