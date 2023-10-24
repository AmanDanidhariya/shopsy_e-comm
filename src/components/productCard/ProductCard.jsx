import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ id, img, name, price, type, colors }) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/product/${id}`}>
      <div
        className="card w-80 glass bg-indigo-200 m-4"
      >
        <figure>
          <img className="h-56 w-full" src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-indigo-900">{name}</h2>
          <p className="font-bold text-red-600 text-xl">{type}</p>

          <div className="card-actions justify-between">
            <div className="text-2xl text-green-600 font-bold mt-2">
              ${price}
            </div>
            {/* <button className="btn btn-primary ">Add to cart</button> */}
            <div className="flex gap-6 mt-4">
              {/* listing cloth color  availibility*/}
              {colors?.map((color, index) => {
                return (
                  <span
                    className="w-4 h-4 rounded-full "
                    key={index}
                    style={{ backgroundColor: color }}
                  ></span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
