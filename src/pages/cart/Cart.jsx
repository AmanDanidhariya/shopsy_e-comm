import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  //id, price,size,amount,img,totalPrice,name,text,color
  return (
    <>
      <div className="flex flex-wrap p-4 h-screen ">
        {cart.map((item) => {
          const color = item.color;
          return (
            <div
              className="card card-compact w-96 m-4 shadow-xl bg-gray-300 max-h-[600px]"
              key={item.id}
            >
              <figure>
                <img src={item.img} alt={item.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p className="font-semibold">{item.text}</p>
                <span
                  className="text-xl font-bold text-white w-2 h-2 p-3 rounded-lg"
                  style={{ backgroundColor: color }}
                ></span>
                <div className="flex justify-between w-full">
                  <span className="text-2xl font-bold text-purple-800">
                    {item.amount} pcs.
                  </span>
                  <span className="text-2xl font-bold mr-6">{item.size}</span>
                </div>
                <div className="flex leading-10">
                  <p className="text-2xl font-bold text-blue-900 mt-2">
                    ${item.price}
                  </p>
                  <button className="btn btn-error hover:text-white" onClick={()=>dispatch(removeFromCart(item))}>
                    remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-3xl font-bold text-center border-neutral-900 border-t-[10px] pb-6">
        <span className="text-black">TotalPrice :- </span>
        <span className="text-blue-950">$ {totalPrice}</span>
      </div>
    </>
  );
};

export default Cart;
