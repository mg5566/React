import { Fragment, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

import Comments from "../components/comments/Comments.js";
import HighlightedQuote from "../components/quotes/HighlightedQuote.js";
import LoadingSpinner from "../components/UI/LoadingSpinner.js";
import useHttp from "../hooks/use-http.js";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route path="comments" element={<Comments />} />
        <Route
          path=""
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Load comments
              </Link>
            </div>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
