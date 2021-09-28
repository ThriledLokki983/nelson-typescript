/** @format */
import { AllActions } from "./action";

export type CountryType = {
	alpha2Code: string;
	alpha3Code: string;
	altSpellings: string[];
	area: number;
	borders: string[];
	callingCodes: string[];
	capital: string;
	currencies: Currency[];
	demonym: string;
	flag: string;
	gini: number;
	languages: Language[];
	latlng: number[];
	name: string;
	nativeName: string;
	numericCode: number;
	population: number;
	region: string;
	regionalBlocs: RegBlocks[];
	subregion: string;
	timezones: string[];
	topLevelDomain: string[];
	translations: object;
	cioc: string;
};

type RegBlocks = {
	acronym: string;
	name: string;
	otherNames: string[];
};

type Currency = {
	symbol: string;
	name: string;
	code: string;
};

type Language = {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
};

// https://restcountries-v2.herokuapp.com/country/${name}

const defaultState: DefaultState = {
	cart: [],
	countries: [],
	country: null,
	error: null,
};

export type DefaultState = {
	cart: CountryType[];
	countries: CountryType[];
	country: CountryType | null | undefined;
	error: any;
};

const reducer = (state = defaultState, action: AllActions): DefaultState => {
	// action = {type: action and type }
	switch (action.type) {
		case "INSERT_COUNTRY":
			const incomingCountry = action.payload; //<= country object
			const incomingName = incomingCountry.name;
			const existingCountry = state.cart.find((country) => {
				if (incomingName === country.name) {
					return true;
				}
				return false;
			});

			if (existingCountry) {
				return state;
			} else {
				return {
					...state,
					cart: [...state.cart, incomingCountry],
				};
			}

		case "DELETE_COUNTRY":
			const getCountry = action.payload;
			return {
				...state,
				cart: [...state.cart.filter((country) => getCountry !== country.name)],
			};

		default:
			return state;
	}
};

export default reducer;
