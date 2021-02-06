import { combineReducers } from 'redux'

import jokeReducer from './joke'
import categoriesReducer from './categories'
import categoryReducer from './category'

const rootReducer = combineReducers({
  joke: jokeReducer,
  categories: categoriesReducer,
  category: categoryReducer
})

export default rootReducer
