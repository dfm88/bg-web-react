import { createSlice } from '@reduxjs/toolkit'

export const mainfFormSlice = createSlice({
  name: 'mainFormErrors',
  initialState: {
    mainFormErrors: {}
  },
  reducers: {
      updateErrors: (state, action) => {

      state.mainFormErrors = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateErrors } = mainfFormSlice.actions

export default mainfFormSlice.reducer