import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => [...prevState, prevState.length + 1]);
  };

  const removeItemHandler = (selIndex) => {
    // console.log("List removeItemHandler", selIndex)
    setItems((prevState) =>
      prevState.filter((item, index) => index !== selIndex)
    );
  };

  const listItems = items.map((item, index) => (
    <CSSTransition timeout={1000} classNames="fade" key={index}>
      <li
        className="ListItem"
        onClick={() => removeItemHandler(index)}
      >
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup className="List" component="ul">
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
