import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="centered">
      <p>Page Not Found!</p>
      <Link to="/">go to the home</Link>
    </div>
  );
};

export default NotFound;
