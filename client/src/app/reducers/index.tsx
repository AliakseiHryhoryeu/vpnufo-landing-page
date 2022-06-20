import { combineReducers } from 'redux'
import { RootState } from './state'
import { userReducer } from './user'

export { type RootState }

export const rootReducer = combineReducers<RootState>({
	user: userReducer,
})
