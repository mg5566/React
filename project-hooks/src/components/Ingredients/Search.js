import { useEffect, useState } from "react";
import Card from "../UI/Card";

import "./Search.css";

const Search = (props) => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");

  useEffect(() => {
    console.log("Search render", enteredFilter);
    const query =
      enteredFilter.length === 0
        ? ""
        : `?orderBy="title"&equalTo="${enteredFilter}"`;
    fetch(
      "https://react-26863-default-rtdb.firebaseio.com/ingredient.json" + query
    )
      .then((response) => response.json())
      .then((responseData) => {
        const newIngredientsArray = [];
        for (const key in responseData) {
          newIngredientsArray.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        // set data
        onLoadIngredients(newIngredientsArray);
      });
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label htmlFor="filter">Filter by Title</label>
          <input
            id="filter"
            type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
};

export default Search;
