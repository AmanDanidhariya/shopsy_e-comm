import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/dummyData";

const initialState = {
  loading: false,
  products: storeData,
  filterButtons: [
    "Hoodies",
    "Dresses",
    "Suits",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ],
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
