import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage";
import { ShoppingCartProvider } from "./shoppingCartContext";
import ProductListingPage from "./components/productListingPage";
import ShoppingCartIcon from "./components/shoppingCartIcon";
import ShoppingCartPage from "./components/shoppingCartPage";
import './App.css'
import Header from "./components/header";
function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Header />
        <div className="App">
          <ShoppingCartIcon />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
          </Routes>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
