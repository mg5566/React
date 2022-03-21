import { useCallback, useReducer, useState } from "react";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get here!");
  }
};

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);

  // const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch("https://react-26863-default-rtdb.firebaseio.com/ingredient.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((responseData) => {
        // setUserIngredients((prevState) => [
        //   ...prevState,
        //   { id: responseData.name, ...ingredient },
        // ]);
        dispatch({
          type: "ADD",
          ingredient: { id: responseData.name, ...ingredient },
        });
      });
  };

  const removeIngredientHandler = (id) => {
    setIsLoading(true);
    fetch(
      `https://react-26863-default-rtdb.firebaseio.com/ingredient/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIsLoading(false);
        // setUserIngredients((prevState) =>
        //   prevState.filter((item) => item.id !== id)
        // );
        dispatch({ type: "DELETE", id: id });
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveIngredient={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
