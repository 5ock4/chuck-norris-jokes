import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  loading: false,
  hasErrors: false,
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCategoriesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
} = categoriesSlice.actions;

// A selector
export const categoriesSelector = (state) => state.categories;

// The reducer
export default categoriesSlice.reducer;

// Asynchronous thunk action
export function fetchCategories() {
  return async (dispatch) => {
    dispatch(getCategories());

    try {
      const response = await axios.get(
        process.env.REACT_APP_CHUCK_NORRIS_JOKES_API + "/categories"
      );
      const data = response.data;
      console.log("Fetched categories");
      console.log(data);
      dispatch(getCategoriesSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getCategoriesFailure());
    }
  };
}
