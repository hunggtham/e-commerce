import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Customer/components/Footer/Footer";
import Navigation from "./Customer/components/Navigation/Navigation";
import Product from "./Customer/components/Product/Product";
import HomePage from "./Customer/components/pages/HomePage/HomePage";
import ProductDetail from "./Customer/components/ProductDetail/ProductDetail";
import Cart from "./Customer/components/Cart/Cart";
import Payment from "./Customer/components/Payment/Payment";
import Order from "./Customer/components/Order/Order";
import OrderDetail from "./Customer/components/Order/OrderDetail";
import OrderTracker from "./Customer/components/Order/OrderTracker";
import CustomerRoutes from "./Routers/CustomerRoutes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
