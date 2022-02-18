import { Fragment } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments.js";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;
