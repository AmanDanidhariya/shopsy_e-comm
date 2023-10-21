import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import SingleProduct from "./components/singleProduct/SingleProduct";
import PageNotFound from "./components/pageNotFound/PageNotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="/product/:id" element={<SingleProduct/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
