import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm.js";
import useHttp from "../hooks/use-http.js";
import { addQuote } from "../lib/api.js";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      // route to all quotes page
      navigate("/");
    }
  }, [navigate, status]);

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // send req to server
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
