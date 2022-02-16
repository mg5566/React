import MainHeader from "./components/MainHeader";
import { Route, Routes } from "react-router-dom";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
};

const Layout = () => {
  return <h2>Let's get started!</h2>;
};

export default App;
