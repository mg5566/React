import { Routes, Route } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="quotes" element={<AllQuotes />} />
        <Route path="quotes/:quotesId" element={<QuoteDetail />} />
        <Route path="new-quote" element={<NewQuote />} />
      </Routes>
    </div>
  );
}

const MainPage = () => {
  return <h1>Main page</h1>;
};

export default App;
