import Card from "../UI/Card";

import "./IngredientForm.css";

const IngredientForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input id="title" type="text" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="text" />
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
