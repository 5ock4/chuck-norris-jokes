import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  loading: false,
  hasErrors: false,
  categories: [],
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state) => {
      state.loading = true
    },
    setCategoriesSuccess: (state, { payload }) => {
      state.categories = payload
      state.loading = false
      state.hasErrors = false
    },
    setCategoriesFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// Actions generated from the slice
export const {
  setCategories,
  setCategoriesSuccess,
  setCategoriesFailure,
} = categoriesSlice.actions

// Selector
export const categoriesSelector = (state) => state.categories

// Reducer
export default categoriesSlice.reducer

// Asynchronous thunk action
export function getCategories(fetchCategories) {
  return async (dispatch) => {
    dispatch(setCategories())

    try {
      const data = await fetchCategories()
      dispatch(setCategoriesSuccess(data))
    } catch (error) {
      dispatch(setCategoriesFailure())
    }
  }
}
