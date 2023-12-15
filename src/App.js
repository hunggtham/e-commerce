import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Customer/components/Footer/Footer";
import Navigation from "./Customer/components/Navigation/Navigation";
import Product from "./Customer/components/Product/Product";
import HomePage from "./Customer/components/pages/HomePage/HomePage";
import ProductDetail from "./Customer/components/ProductDetail/ProductDetail";
import Cart from "./Customer/components/Cart/Cart";
import Payment from "./Customer/components/Payment/Payment";
function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <HomePage /> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/products" element={<Product />} /> */}
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
