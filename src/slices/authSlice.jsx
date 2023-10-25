// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // User data when logged in
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      // Update the user state upon successful signup
      state.user = action.payload;
    },
    login: (state, action) => {
      // Update the user state upon successful login
      state.user = action.payload;
    },
    logout: (state) => {
      // Clear user state upon logout
      state.user = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
