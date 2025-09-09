import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionInfo from "./components/SectionInfo";   
import ProductSlider from "./components/ProductSlider";
import ProductDetail from "./pages/ProductDetail"; 
import CustomCursor from "./components/CustomCursor"; // 👈 import cursor

function App() {
  return (
    <BrowserRouter>
      <CustomCursor /> {/* 👈 cursor activo en TODAS las páginas */}

      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <SectionInfo />
              <ProductSlider />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />

        {/* Ruta dinámica de detalle */}
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;