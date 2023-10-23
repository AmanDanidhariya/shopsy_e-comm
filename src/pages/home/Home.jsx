import React from "react";
import FilterPanel from "../../components/filterPanel/FilterPanel";
import Products from "../../components/productsPage/Products";


const Home = () => {
  return (
    <>
      <FilterPanel/>
      <Products/>
    </>
  );
};

export default Home;
