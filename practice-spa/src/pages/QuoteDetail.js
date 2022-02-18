import { Fragment } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments.js";
import HighlightedQuote from "../components/quotes/HighlightedQuote.js";

// 임시로 추가
const DUMMY_QUOTES = [
  { id: "q1", author: "Kang", text: "the beginning is half" },
  {
    id: "q2",
    author: "Kang",
    text: "Strong against the strong, infinitely weak against the weak",
  },
  { id: "q3", author: "GAYLE", text: "A, B, C, D, E, Fuck U" },
  { id: "q4", author: "Pythagoras", text: "There is no answer" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
