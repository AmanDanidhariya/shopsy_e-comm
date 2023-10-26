import { NavLink } from "react-router-dom";
import { logout } from "../../slices/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="flex flex-row items-center justify-between bg-gray-300 p-4 text-gray-800 leading-10 sticky top-0 z-50">
      <div className="icon text-3xl font-bold ml-10 text-gray-900">SHOPSY</div>

      <ul className="flex gap-14 text-lg font-bold mr-10">
        <li className="flex leading-4 gap-2  cursor-pointer hover:text-white ">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="flex leading-4 gap-2 cursor-pointer hover:text-white ">
          <NavLink to="cart">Cart</NavLink>
        </li>
        <li className="flex leading-4 gap-2 cursor-pointer hover:text-white ">
          <NavLink onClick={handleLogout} to="/">
            logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
