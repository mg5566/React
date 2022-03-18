import { useCallback, useEffect, useState } from "react";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  // load data when this component is evaluated for the first time
  // useEffect(() => {
  //   fetch("https://react-26863-default-rtdb.firebaseio.com/ingredient.json")
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const newIngredientsArray = [];
  //       for (const key in responseData) {
  //         newIngredientsArray.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       setUserIngredients(newIngredientsArray);
  //     });
  // }, []);

  const addIngredientHandler = (ingredient) => {
    fetch("https://react-26863-default-rtdb.firebaseio.com/ingredient.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevState) => [
          ...prevState,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  const removeIngredientHandler = (id) => {
    setUserIngredients((prevState) =>
      prevState.filter((item) => item.id !== id)
    );
  };

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, []);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

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
