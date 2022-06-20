import { Store, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { RootState } from '../reducers/state'
import { rootReducer } from 'app/reducers'


export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(thunk)

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware)
  }

  const store = createStore(rootReducer as any, initialState as any, middleware)

  return store
}
