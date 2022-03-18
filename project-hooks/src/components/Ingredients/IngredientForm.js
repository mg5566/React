import { useState } from "react";
import Card from "../UI/Card";

import "./IngredientForm.css";

const IngredientForm = () => {
  const inputState = useState({ title: "", amount: "" });

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              id="title"
              type="text"
              value={inputState[0].title}
              onChange={(event) => {
                inputState[1]((prevState) => ({
                  title: event.target.value,
                  amount: prevState.amount,
                }));
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              value={inputState[0].amount}
              onChange={(event) => {
                inputState[1]((prevState) => ({
                  amount: event.target.value,
                  title: prevState.title,
                }));
              }}
            />
          </div>
          <div className="ingredient-form__action">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default IngredientForm;
