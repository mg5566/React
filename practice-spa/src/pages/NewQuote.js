import { useNavigate } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm.js";

const NewQuote = () => {
  const navigate = useNavigate();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // send req to server

    // route to all quotes page
    navigate("/");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
