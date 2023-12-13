import "./App.css";
import Footer from "./Customer/components/Footer/Footer";
import Navigation from "./Customer/components/Navigation/Navigation";
import Product from "./Customer/components/Product/Product";
import HomePage from "./Customer/components/pages/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <HomePage /> */}
      <Product />
      <Footer />
    </div>
  );
}

export default App;
