// import { useContext } from "react";
// import { ProductsContext } from "../../context/products-context";
import React from "react";
import { useStore } from "../../hooks-store/store";
import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = React.memo((props) => {
  console.log("RENDER");
  // const toggleFav = useContext(ProductsContext).toggleFav;
  const dispatch = useStore(false)[1];

  const toggleHandler = () => {
    // toggleFav(props.id);
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
