import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 theme: "Light",
 
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state,action) => {
     state.theme = action.payload.theme
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer