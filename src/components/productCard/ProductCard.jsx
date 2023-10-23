import React from "react";

const ProductCard = ({ img, name, price, type }) => {
  return (
    <>
      <div className="card w-80 glass bg-indigo-200 m-4">
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
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
