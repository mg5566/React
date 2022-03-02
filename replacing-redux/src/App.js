import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from "./components/Nav/Navigation"

function App() {
  return (
    <Fragment>
      <Navigation />
      {/* <Routes>
        <Route path="/" element={} />
        <Route path="/favorites" element={} />
        <Route path="/*" element={<p>404 Not Found</p>} />
      </Routes> */}
    </Fragment>
  );
}

export default App;
