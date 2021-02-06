import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  searchText: '',
  textTooShort: false,
}

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload
      if (action.payload.length > 0 && action.payload.length < 3) {
        state.textTooShort = true
      } else {
        state.textTooShort = false
      }
    },
  },
})

// action generated from the slice
export const {setSearchText} = searchTextSlice.actions

// A selector
export const searchTextSelector = (state) => state.searchText

// The reducer
export default searchTextSlice.reducer