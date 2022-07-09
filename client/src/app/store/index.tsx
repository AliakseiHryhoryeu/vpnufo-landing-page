import { combineReducers } from 'redux'
import { RootState } from './state'
import { userReducer } from './user/user.reducer'
import { faqReducer } from './faq/faq.slice'
import { feedbackReducer } from './feedback/feedback.reducer'

export { type RootState }

export const rootReducer = combineReducers<RootState>({
	user: userReducer,
	faq: faqReducer,
	feedback: feedbackReducer,
})
