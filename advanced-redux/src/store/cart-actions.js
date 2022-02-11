import { uiActions } from "./ui-slice";

// thunk action creator
export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-26863-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
