// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // User data when logged in
};

const authSlice = createSlice({
  name: "auth",
  isAuthenticated: false,
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Update the user state upon successful signup
      state.user = action.payload;
    },
    login: (state, action) => {
      // Update the user state upon successful login
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      // Clear user state upon logout
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
