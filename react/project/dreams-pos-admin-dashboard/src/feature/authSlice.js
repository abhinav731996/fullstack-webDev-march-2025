import { createSlice } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('dreamsUser')) || null

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user,
    isAuthenticated: !!user,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      localStorage.setItem('dreamsUser', JSON.stringify(action.payload))
    },

    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      localStorage.removeItem('dreamsUser')
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
