import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Customer/components/Footer/Footer";
import Navigation from "./Customer/components/Navigation/Navigation";
import Product from "./Customer/components/Product/Product";
import HomePage from "./Customer/components/pages/HomePage/HomePage";
import ProductDetail from "./Customer/components/ProductDetail/ProductDetail";
function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
