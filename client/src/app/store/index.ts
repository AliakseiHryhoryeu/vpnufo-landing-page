import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.slice'
import { postAPI } from '../services/PostService'

const rootReducer = combineReducers({
	userReducer,
	[postAPI.reducerPath]: postAPI.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(postAPI.middleware),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

// import { combineReducers } from 'redux'
// import { RootState } from './state'
// import { userReducer } from './user/user.reducer'
// import { faqReducer } from './faq/faq.slice'
// import { feedbackReducer } from './feedback/feedback.slice'

// export { type RootState }

// export const rootReducer = combineReducers<RootState>({
// 	user: userReducer,
// 	faq: faqReducer,
// 	feedback: feedbackReducer,
// })

// import { Store, createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

// import { RootState } from './state'
// import { rootReducer } from 'app/store/'

// export function configureStore(initialState?: RootState): Store<RootState> {
// 	let middleware = applyMiddleware(thunk)

// 	if (process.env.NODE_ENV !== 'production') {
// 		middleware = composeWithDevTools(middleware)
// 	}

// 	const store = createStore(rootReducer as any, initialState as any, middleware)

// 	// const store = configureStore({
// 	// 	reducer: {
// 	// 		[productApi.reducerPath]: productApi.reducer,
// 	// 		cart: cartReducer,
// 	// 	},
// 	// 	middleware: getDefaultMiddleware =>
// 	// 		getDefaultMiddleware().concat(productApi.middleware),
// 	// })

// 	return store
// }
