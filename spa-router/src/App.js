import { Route, Routes } from "react-router-dom";

import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
