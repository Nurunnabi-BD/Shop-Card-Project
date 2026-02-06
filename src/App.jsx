import { Routes, Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Shop from "./components/Shop";
import CartProvider from "./components/CartProvider";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.price * item.quantity),
    0,
  );

  return (
    <>
      <Header cart={cart} totalPrice={totalPrice} />
      <Routes>
        <Route path="/" element={<Shop cart={cart} setCart={setCart} />} />
        <Route
          path="/cart"
          element={
            <CartProvider
              cart={cart}
              setCart={setCart}
              totalPrice={totalPrice}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
