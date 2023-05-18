import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../Pages/Checkout";
import ItemDetails from "../Pages/ItemDetails";
import Home from "../Pages/Home";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
