import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/dummyData";

const initialState = {
  products: storeData,
  filterProducts: [],
  //for filter radio buttons
  filterButtons: [
    "Hoodies",
    "Dresses",
    "Suits",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action) {
      try {
        //filter Data according to filterButton
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterProducts = filter;
      } catch (error) {
        return error;
      }
    },
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
