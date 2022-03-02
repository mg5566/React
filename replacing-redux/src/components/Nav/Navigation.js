import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Products</NavLink>
            <NavLink to="/favorites">favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
