import QuoteList from "../components/quotes/QuoteList.js";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
