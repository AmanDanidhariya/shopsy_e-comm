import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
  products: [],
  error: "",
};



export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers:{},

});

// export const () = productSlice.actions;
export default productSlice.reducer;
