import { combineReducers } from 'redux'

import jokeReducer from './joke'
import categoriesReducer from './categories'

const rootReducer = combineReducers({
  joke: jokeReducer,
  categories: categoriesReducer
})

export default rootReducer
