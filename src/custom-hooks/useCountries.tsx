/** @format */

// This hook is used to fetch all countries
import { useState, useEffect } from "react";
import { CountryType } from "../redux/reducer";

function useCountries() {
	const [countries, setCountries] = useState<CountryType[]>([]);
	const [error, setError] = useState();

	useEffect(() => {
		const getCountryData = async () => {
			try {
				const response = await fetch("https://restcountries.com/v2/all");
				const responseJson = await response.json();

				setCountries(responseJson);
			} catch (error: any) {
				setError(error);
			}
		};
		getCountryData();
	}, []);
	return [countries, error];
}

export default useCountries;
