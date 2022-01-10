import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartRuducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.prie * action.item.amount;
    return ({
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    });
  } else if (action.type === 'REMOVE_CART_ITEM') {

  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispathCartAction] = useReducer(
    cartRuducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispathCartAction({ type: "ADD_CART_ITEM", item: item });
  };

  const removeItemFromCarthandler = (id) => {
    dispathCartAction({ type: "REMOVE_CART_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCarthandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
