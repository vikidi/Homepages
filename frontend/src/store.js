import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import userReducer from './reducers/userReducer'
import languageReducer from './reducers/languageReducer'
import notificationReducer from './reducers/notificationReducer'
import themeReducer from './reducers/themeReducer'

const reducer = combineReducers({
  user: userReducer,
  language: languageReducer,
  notification: notificationReducer,
  theme: themeReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store