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
    setCategories: (state) => {
      state.loading = true;
    },
    setCategoriesSuccess: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    setCategoriesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Actions generated from the slice
export const {
  setCategories,
  setCategoriesSuccess,
  setCategoriesFailure,
} = categoriesSlice.actions;

// Selector
export const categoriesSelector = (state) => state.categories;

// Reducer
export default categoriesSlice.reducer;

// Asynchronous thunk action
export function fetchCategories() {
  return async (dispatch) => {
    dispatch(setCategories());

    try {
      const response = await axios.get(
        process.env.REACT_APP_CHUCK_NORRIS_JOKES_API + "/categories"
      );
      const data = response.data;
      console.log("Fetched categories");
      console.log(data);
      dispatch(setCategoriesSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(setCategoriesFailure());
    }
  };
}
