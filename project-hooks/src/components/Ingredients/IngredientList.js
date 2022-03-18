import "./IngredientList.css";

const IngredientList = (props) => {
  return (
    <section className="ingredient-list">
      <h2>Load Ingredients</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient.id} onClick={() => props.onRemoveIngredient(ingredient.id)}>
            <span>{ingredient.title}</span>
            <span>x {ingredient.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
