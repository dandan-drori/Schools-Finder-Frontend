import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { tableReducer } from './reducers/tableReducer'
import { userMsgReducer } from './reducers/userMsgReducer'

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
	tableModule: tableReducer,
	userMsgModule: userMsgReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
