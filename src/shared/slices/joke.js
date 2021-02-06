import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

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
export const fetchRandomJoke = (category) => {
  return async (dispatch) => {
    dispatch(getJokes())

    try {
      const path = category == null ? '/random' : `/random?category=${category}`

      const response = await axios.get(process.env.REACT_APP_CHUCK_NORRIS_JOKES_API + path);
    
      const data = response.data.value;
      console.log('fetchRandomJoke');
      dispatch(getJokesSuccess(data))
    } catch (error) {
      console.log('Error in fetch joke.')
      dispatch(getJokesFailure())
    }
  }
}

//TODO: create thunk actions:
// 1) for fetch random jokes from category

// 2) free text search - choosing randomly one