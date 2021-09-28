/** @format */

import { CountryType } from "./reducer";

const INSERT_COUNTRY = "INSERT_COUNTRY";
const DELETE_COUNTRY = "DELETE_COUNTRY";

export const removeCart = (countryName: string) => {
	return {
		type: "REMOVE_COUNTRY",
		payload: countryName,
	};
};

export const insertCart = (country: CountryType) => {
	return {
		type: INSERT_COUNTRY,
		payload: country,
	};
};

type insert = {
	type: typeof INSERT_COUNTRY;
	payload: CountryType;
};

type remove = {
	type: typeof DELETE_COUNTRY;
	payload: string;
};

export type AllActions = insert | remove;
