import React from "react";
import FilterPanel from "../../components/filterPanel/FilterPanel";
import Products from "../../components/productsPage/Products";

const Home = () => {
  return (
    <div className="flex max-h-full">
      <FilterPanel />
        <Products />
    </div>
  );
};

export default Home;
