import { combineReducers } from 'redux'

import jokeReducer from './joke'

const rootReducer = combineReducers({
  joke: jokeReducer,
})

export default rootReducer
