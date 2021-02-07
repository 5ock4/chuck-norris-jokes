import { combineReducers } from "redux";

import jokeReducer from "../jokes/slices/joke";
import categoriesReducer from "../jokes/slices/categories";
import categoryReducer from "../jokes/slices/category";
import searchTextReducer from "../jokes/slices/searchText";

const rootReducer = combineReducers({
  joke: jokeReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  searchText: searchTextReducer,
});

export default rootReducer;
