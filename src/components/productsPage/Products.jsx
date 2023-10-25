import { useSelector } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import React from "react";

const Products = () => {
  //select products array form store
  const products = useSelector((state) => state.products.products);
  //select filterProducts array from store
  const filterProducts = useSelector((state) => state.products.filterProducts);
  //check if filterProducts has length or not
  const filterApplied = filterProducts.length;

  return (
    <div className="flex flex-wrap ">
      {filterApplied
        ? filterProducts.map((product) => {
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
          })
        : products.map((product) => {
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
  );
};

export default Products;
