import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./authentication";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authReducer,
  },
});

export default store;
