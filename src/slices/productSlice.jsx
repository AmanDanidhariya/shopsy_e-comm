import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/dummyData";

const initialState = {
  products: storeData,
  filterProducts: [],
  //current page number
  currentPage:1,
  //items per page
  itemsPerPage:6,
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
        //add filtered product to array
        state.filterProducts = filter;
      } catch (error) {
        return error;
      }
    },
    changePage(state , action){
      state.currentPage = action.payload;
    }
  },
});

export const { filterProducts , changePage} = productSlice.actions;
export default productSlice.reducer;
