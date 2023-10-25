import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import React from "react";
import { changePage } from "../../slices/productSlice";

const Products = () => {
  //select products array form store
  const products = useSelector((state) => state.products.products);
  //select filterProducts array from store
  const filterProducts = useSelector((state) => state.products.filterProducts);
  //select currentPage from store
  const currentPage = useSelector((state) => state.products.currentPage);
  const itemsPerPage = useSelector((state) => state.products.itemsPerPage);
  const dispatch = useDispatch();
  //check if filterProducts has length or not
  const filterApplied = filterProducts.length;

  //which data mapping based filter length
  const data = filterApplied ? filterProducts : products;

  //range of products to display according to currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //slice product based on pagination
  const productSlice = data.slice(startIndex, endIndex);
  //count totalPages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(changePage(page));
    }
  };

  return (
    <div className="flex flex-col w-screen ">
      <div className="flex flex-wrap ">
        {productSlice.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <ProductCard
                id={product.id}
                type={product.type}
                img={product.img}
                name={product.name}
                price={product.price}
                text={product.text}
                colors={product.color}
              />
            </React.Fragment>
          );
        })}
      </div>
      {/* pagination start */}
      <div className="join justify-center my-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="join-item btn"
        >
          «
        </button>
        <button className="join-item btn">
          <span>{currentPage}</span>of<span>{totalPages}</span>
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= data.length}
          className="join-item btn"
        >
          »
        </button>
      </div>
      {/* pagination end */}
    </div>
  );
};

export default Products;
