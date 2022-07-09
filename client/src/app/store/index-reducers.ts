import { Store, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { RootState } from './state'
import { rootReducer } from 'app/store/'

export function configureStore(initialState?: RootState): Store<RootState> {
	let middleware = applyMiddleware(thunk)

	if (process.env.NODE_ENV !== 'production') {
		middleware = composeWithDevTools(middleware)
	}

	const store = createStore(rootReducer as any, initialState as any, middleware)

	// const store = configureStore({
	// 	reducer: {
	// 		[productApi.reducerPath]: productApi.reducer,
	// 		cart: cartReducer,
	// 	},
	// 	middleware: getDefaultMiddleware =>
	// 		getDefaultMiddleware().concat(productApi.middleware),
	// })

	return store
}
