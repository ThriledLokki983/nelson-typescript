/** @format */
import { DefaultState } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import thunk from "redux-thunk";

function saveToLocalStorage(state: DefaultState) {
	try {
		const localStorageState = JSON.stringify(state);
		localStorage.setItem("statePersist", localStorageState);
	} catch (e) {
		console.warn(e);
	}
}

function loadFromLocalStorage() {
	try {
		const localStorageState = localStorage.getItem("statePersist");
		if (localStorageState === null) return undefined;
		return JSON.parse(localStorageState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}

const storeFactory = () => {
	const middlewares = [thunk];
	const reduxStore = createStore(
		reducer,
		loadFromLocalStorage(),
		composeWithDevTools(applyMiddleware(...middlewares))
	);

	reduxStore.subscribe(() => saveToLocalStorage(reduxStore.getState()));
	return reduxStore;
};
export type Store = ReturnType<typeof storeFactory>;

export default storeFactory;
