import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";

const SingleProduct = () => {
  //select product value from store
  const product = useSelector((state) => state.products.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  //default size first in sizeArray
  const productSize = product[0].size ? product[0].size[0] : "";
  //default color first in colorArray
  const productColor = product[0].color[0];

  //get size value
  const [size, setSize] = useState(productSize);
  //get color value
  const [color, setColor] = useState(productColor);

  //find the selected product from data
  const singleProduct = product.find((item) => item.id === id);
  console.log("singleProduct", singleProduct);

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl w-[80%] p-4 m-auto mb-6">
        <figure className="w-full h-screen ">
          <img src={singleProduct.img} alt={singleProduct.name} />
        </figure>
        <div className=" flex flex-col mt-20  ml-10">
          <h2 className="card-title text-black text-4xl py-3">
            {singleProduct.name}
          </h2>
          <p className="text-gray-500 font-bold py-3">{singleProduct.text}</p>
          {/* list of Size start */}
          <div>
            <p className="text-lg font-bold py-3">Pick a Size</p>
            <select
              id={singleProduct.id}
              name="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {singleProduct.size.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/* list of Size end */}
          {/* list of color start */}
          <div>
            <p className="text-lg font-bold py-3">Pick a color</p>
            <select
              id={singleProduct.id}
              name="size"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {singleProduct.color.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="my-3 text-4xl text-blue-900 font-bold">
            $ {singleProduct.price}
          </div>
          {/* list of color end */}
          <button
            className="btn btn-primary my-10 hover:text-black"
            onClick={() =>
              dispatch(
                addToCart({
                  id: singleProduct.id,
                  price: singleProduct.price,
                  amount: 1,
                  totalPrice: singleProduct.price,
                  name: singleProduct.name,
                  size: size,
                  color: color,
                  img: singleProduct.img,
                  text: singleProduct.text,
                })
              )
            }
          >
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
