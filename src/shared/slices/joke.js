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
export function fetchJokes() {
  return async (dispatch) => {
    dispatch(getJokes())

    try {
      const response = await axios.get(process.env.REACT_APP_CHUCK_NORRIS_JOKES_API + '/random')
      const data = response.data.value
      console.log(data)
      dispatch(getJokesSuccess(data))
    } catch (error) {
      console.log(error)
      dispatch(getJokesFailure())
    }
  }
}

//TODO: create thunk actions:
// 1) for fetch random jokes from category
// 2) free text search - choosing randomly one