import { useEffect, useRef, useState } from "react";
import Card from "../UI/Card";

import "./Search.css";

const Search = (props) => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    // console.log("Search render", enteredFilter);
    setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        fetch(
          "https://react-26863-default-rtdb.firebaseio.com/ingredient.json" +
            query
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
      }
    }, 500);
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label htmlFor="filter">Filter by Title</label>
          <input
            ref={inputRef}
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
