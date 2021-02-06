import { combineReducers } from 'redux';

import jokeReducer from './joke';
import categoriesReducer from './categories';
import categoryReducer from './category';
import searchTextReducer from './searchText';

const rootReducer = combineReducers({
  joke: jokeReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  searchText: searchTextReducer
})

export default rootReducer