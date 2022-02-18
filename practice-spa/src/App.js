import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="quotes" />} />
        <Route path="quotes" element={<AllQuotes />} />
        <Route path="quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="new-quote" element={<NewQuote />} />
      </Routes>
    </Layout>
  );
}

export default App;
