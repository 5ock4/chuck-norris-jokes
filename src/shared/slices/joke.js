import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { getPath, getData } from "../util/utils";

export const initialState = {
  loading: false,
  hasErrors: false,
  joke: null,
};

const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    setJokes: (state) => {
      state.loading = true;
    },
    setJokesSuccess: (state, { payload }) => {
      state.joke = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    setJokesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Actions generated from the slice
export const {
  setJokes,
  setJokesSuccess,
  setJokesFailure,
} = jokesSlice.actions;

// Selector
export const jokesSelector = (state) => state.joke;

// Reducer
export default jokesSlice.reducer;

// Asynchronous thunk action
export const fetchRandomJoke = (category, searchText) => {
  return async (dispatch) => {
    dispatch(setJokes());

    try {
      const response = await axios.get(
        process.env.REACT_APP_CHUCK_NORRIS_JOKES_API +
          getPath(category, searchText)
      );
      console.log(response);
      const data = getData(response);
      console.log("fetchRandomJoke");
      dispatch(setJokesSuccess(data));
    } catch (error) {
      console.log("Error in fetch joke.");
      console.log(error);
      dispatch(setJokesFailure());
    }
  };
};
