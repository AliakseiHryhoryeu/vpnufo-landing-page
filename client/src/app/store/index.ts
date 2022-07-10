import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { faqReducer } from './faq/faq.slice'
import { feedbackReducer } from './feedback/feedback.slice'
import { userReducer } from './user/user.slice'
import { userApi } from './user/user.api'
import { faqApi } from './faq/faq.api'
import { feedbackApi } from './feedback/feedback.api'

export const store = configureStore({
	reducer: {
		user: userReducer,
		faq: faqReducer,
		feedback: feedbackReducer,
		[userApi.reducerPath]: userApi.reducer,
		[faqApi.reducerPath]: faqApi.reducer,
		[feedbackApi.reducerPath]: feedbackApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
})

export type TypeRootState = ReturnType<typeof store.getState>
