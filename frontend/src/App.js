import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

import CustomerRoutes from "./Routers/CustomerRoutes";
import Navigation from "./Customer/components/Navigation/Navigation";
import Footer from "./Customer/components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
