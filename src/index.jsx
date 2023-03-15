import React from "react";
import Header from "./Components/Layout/Header";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import CreateProduct from "./Components/Pages/CreateProduct";
import Product from "./Components/Pages/Product";
import ProductDetails from "./Components/Pages/ProductDetails";
import ProductList from "./Components/Pages/ProductList";
import NotFound from "./Components/NotFound";
import CryptoDetail from './Components/CryptoDetail';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route
        path="/"
        element={<Home />}
      ></Route>
      <Route
        path="/about"
        element={<About />}
      ></Route>
      <Route
        path="/cryptodetail/:cryptoSymbol/:id?"
        element={<CryptoDetail />}
      ></Route>
      <Route
        path="/cryptodetail/:cryptoSymbol"
        element={<CryptoDetail />}
      ></Route>
      <Route path="product">
        <Route
          path=""
          element={<Product />}
        ></Route>
        <Route
          path="create"
          element={<CreateProduct />}
        ></Route>
        <Route
          path="details/:productId"
          element={<ProductDetails />}
        ></Route>
        <Route
          path="list"
          element={<ProductList />}
        ></Route>
      </Route>
      <Route
        path="*"
        element={<NotFound />}
      ></Route>
    </Routes>
  </BrowserRouter>
);
