import { createStore, Middleware, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import thunk from "redux-thunk";

const storeFactory = () => {
  const middlewares = [thunk];
  const reduxStore = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  reduxStore.subscribe(() => {
    console.log("subscribe running");
    const cart = reduxStore.getState().reducer.cart;
    console.log("cart", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  return reduxStore;
};

export default storeFactory;
