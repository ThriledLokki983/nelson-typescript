/** @format */
import { AllActions, INSERT_COUNTRY } from "../action";
import { Country } from "../types";

type DefaultState = {
	cart: Country[];
	countries: Country[];
	country: Country | null;
	error: any;
};

const defaultState: DefaultState = {
	cart: [],
	countries: [],
	country: null,
	error: null,
};

const reducer = (state = defaultState, action: AllActions): DefaultState => {
	//action = {type: "action type", payload: {...}}
	//state = {cart: []}
	switch (action.type) {
		case INSERT_COUNTRY:
			const incomingCountry = action.payload; // country object {name: "", population: 12323, borders: "", languages: , flags}
			const incomingName = incomingCountry.name;
			// existCountry will be a country object, or undefined if nothing matches the condition
			const existCountry = state.cart.find((country) => {
				if (incomingName === country.name) {
					return true;
				}

				return false;
			});

			if (existCountry) {
				return state;
			} else {
				return {
					...state,
					cart: [...state.cart, incomingCountry],
				};
			}

		case "REMOVE_COUNTRY":
			return {
				...state,
				cart: [
					{
						name: "Finland",
						regions: "",
						flag: "",
						languages: [],
						population: 1,
					},
				],
			};

		case "FETCH_COUNTRIES_SUCCESS":
			const countriesPayload = action.payload;
			return {
				...state,
				countries: countriesPayload,
			};

		case "FETCH_ONE_COUNTRY_SUCCESS":
			const countryData = action.payload[0];
			return {
				...state,
				country: countryData,
			};

		case "FETCH_ERROR":
			const errorFromPayload = action.payload;
			return {
				...state,
				error: errorFromPayload,
			};

		default:
			return state;
	}
};

export default reducer;

// const action = {
//   type: 'INSERT_COUNTRY',
//   payload: { countryName: 'Finland' },
// }

// const result = reducer(undefined, action)
//result = {cart: [{countryName: 'Finland}]}
