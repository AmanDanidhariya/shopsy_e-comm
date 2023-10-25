import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import SingleProduct from "./components/singleProduct/SingleProduct";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Navbar from "./components/navbar/Navbar";

//use a lzy function for code splitting
const Home = lazy(()=>import("./pages/home/Home"))
const Signup = lazy(()=>import("./pages/signup/Signup"))
const Login = lazy(()=>import("./pages/login/Login"))
const Cart = lazy(()=>import("./pages/cart/Cart"));

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
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
