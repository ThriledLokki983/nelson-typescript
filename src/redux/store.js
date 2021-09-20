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
  return reduxStore;
};

export default storeFactory;
