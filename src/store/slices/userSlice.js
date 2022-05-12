import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
    }
  }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer