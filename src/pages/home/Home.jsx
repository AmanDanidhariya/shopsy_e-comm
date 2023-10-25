import React from "react";
import FilterPanel from "../../components/filterPanel/FilterPanel";
import Products from "../../components/productsPage/Products";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="flex  max-h-full ">
        <FilterPanel />
        <Products />
      </div>
        <Footer />
    </>
  );
};

export default Home;
