import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

import {getPath, getData} from '../util/utils'

export const initialState = {
  loading: false,
  hasErrors: false,
  joke: null,
}

const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    getJokes: (state) => {
      state.loading = true
    },
    getJokesSuccess: (state, {payload}) => {
      state.joke = payload
      state.loading = false
      state.hasErrors = false
    },
    getJokesFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// Three actions generated from the slice
export const {getJokes, getJokesSuccess, getJokesFailure} = jokesSlice.actions

// A selector
export const jokesSelector = (state) => state.joke

// The reducer
export default jokesSlice.reducer

// Asynchronous thunk action
export const fetchRandomJoke = (category, searchText) => {
  return async (dispatch) => {
    dispatch(getJokes())

    try {
      const response = await axios.get(process.env.REACT_APP_CHUCK_NORRIS_JOKES_API + getPath(category, searchText));
      console.log(response)
      const data = getData(response);
      console.log('fetchRandomJoke');
      dispatch(getJokesSuccess(data))
    } catch (error) {
      console.log('Error in fetch joke.')
      console.log(error)
      dispatch(getJokesFailure())
    }
  }
}