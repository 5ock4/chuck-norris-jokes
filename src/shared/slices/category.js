import {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  category: null
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
  },
})

// action generated from the slice
export const {setCategory} = categorySlice.actions

// A selector
export const categorySelector = (state) => state.category

// The reducer
export default categorySlice.reducer