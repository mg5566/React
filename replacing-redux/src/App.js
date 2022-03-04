import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from "./components/Nav/Navigation"
import Favorites from './containers/Favorites';
import Products from './containers/Products';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/*" element={<p>404 Not Found</p>} />
      </Routes>
    </Fragment>
  );
}

export default App;
