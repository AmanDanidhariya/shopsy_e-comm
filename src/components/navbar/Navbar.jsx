import { BsFillCartCheckFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between bg-gray-200 p-4 text-gray-800 leading-10 ">
      <div className="icon text-3xl font-bold ml-10 text-gray-900">SHOPSY</div>
      <ul className="flex gap-14 text-lg font-bold mr-10">
      <li className="flex leading-4 gap-2  cursor-pointer hover:text-white ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="flex leading-4 gap-2  cursor-pointer hover:text-white ">
        <span><BsFillCartCheckFill/></span>
          <NavLink to="cart">Cart</NavLink>
        </li>
        <li className="flex leading-4 gap-2 cursor-pointer hover:text-white">
        <span><BiSolidUser/></span>
          <NavLink to="login">Sign in</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
