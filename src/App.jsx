import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navbar
          mylogo="MyLogo"
          home="Home"
          menu="Menu"
          mobileApp="Mobile App"
          contactUs="Contact Us"
          signIn="Sign In"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
