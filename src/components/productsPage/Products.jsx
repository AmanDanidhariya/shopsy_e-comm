import { useSelector } from "react-redux";
import ProductCard from "../productCard/ProductCard";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  console.log(typeof products); //obj

  // {
  //   id: "1",
  //   img: shirt1,
  //   name: "Casual T-Shirt 1",
  //   text: "Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.",
  //   type: "T-Shirts",
  //   size: ["XL", "L", "M", "S"],
  //   color: ["black", "gray", "green"],
  //   gender: "male",
  //   price: 45,
  // }

  // img,name,price, type,

  return (
    <div className="flex flex-wrap ">
      {products.map((product) => {
        return (
          <>
            <ProductCard
              type={product.type}
              img={product.img}
              name={product.name}
              price={product.price}
              text={product.text}
            />
          </>
        );
      })}
    </div>
  );
};

export default Products;
