import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionInfo from "./components/SectionInfo";   // ✅ Import nuevo

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <SectionInfo /> {/* ✅ Ahora aparece debajo del Home */}
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;