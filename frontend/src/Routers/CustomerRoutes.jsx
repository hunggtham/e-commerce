import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/components/pages/HomePage/HomePage";
import Cart from "../Customer/components/Cart/Cart";
import Footer from "../Customer/components/Footer/Footer";
import Product from "../Customer/components/Product/Product";
import ProductDetail from "../Customer/components/ProductDetail/ProductDetail";
import Payment from "../Customer/components/Payment/Payment";
import Order from "../Customer/components/Order/Order";
import OrderDetail from "../Customer/components/Order/OrderDetail";
import PaymentSuccess from "../Customer/components/PaymentCheck/PaymentSuccess";

const CustomerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetail />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRoutes;
