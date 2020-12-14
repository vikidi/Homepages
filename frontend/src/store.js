import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import userReducer from './reducers/userReducer'
import languageReducer from './reducers/languageReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  user: userReducer,
  language: languageReducer,
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store