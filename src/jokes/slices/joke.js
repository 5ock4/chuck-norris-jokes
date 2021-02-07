import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  loading: false,
  hasErrors: false,
  joke: null,
}

const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    setJokesLoading: (state) => {
      state.loading = true
    },
    setJokesSuccess: (state, { payload }) => {
      state.joke = payload
      state.loading = false
      state.hasErrors = false
    },
    setJokesFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// Actions generated from the slice
export const {
  setJokesLoading,
  setJokesSuccess,
  setJokesFailure,
} = jokesSlice.actions

// Selector
export const jokesSelector = (state) => state.joke

// Reducer
export default jokesSlice.reducer

// Asynchronous thunk action
export const getRandomJoke = (fetchJoke, category, searchText) => {
  return async (dispatch) => {
    dispatch(setJokesLoading())

    try {
      const data = await fetchJoke(category, searchText)
      dispatch(setJokesSuccess(data))
    } catch (error) {
      dispatch(setJokesFailure())
    }
  }
}
