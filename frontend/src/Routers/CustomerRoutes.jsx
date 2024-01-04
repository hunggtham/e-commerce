import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/components/pages/HomePage/HomePage";
import Cart from "../Customer/components/Cart/Cart";
import Footer from "../Customer/components/Footer/Footer";
import Product from "../Customer/components/Product/Product";
import Navigation from "../Customer/components/Navigation/Navigation";
import ProductDetail from "../Customer/components/ProductDetail/ProductDetail";
import Payment from "../Customer/components/Payment/Payment";
import Order from "../Customer/components/Order/Order";
import OrderDetail from "../Customer/components/Order/OrderDetail";

const CustomerRoutes = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRoutes;
