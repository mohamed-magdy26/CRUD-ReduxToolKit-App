import { createSlice } from '@reduxjs/toolkit'
const initState = {
  items: [],
}
const postsSlice = createSlice({
  name: 'posts',
  initialState: initState,
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload)
    },
    deletePost: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    updatePost: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title
          item.description = action.payload.description
        }
        return null
      })
    },
  },
})

export default postsSlice.reducer

export const { addPost, deletePost, updatePost } = postsSlice.actions
