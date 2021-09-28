/** @format */

// This hook is used to fetch one specific country
import { useState, useEffect } from "react";
import { CountryType } from "../redux/reducer";

function useCountry(countryName: string) {
	const [country, setCountry] = useState<CountryType>();
	const [error, setError] = useState();

	useEffect(() => {
		const getCountryData = async () => {
			try {
				const response = await fetch(`https://restcountries.com/v2/name/${countryName}`);
				const responseJson = await response.json();

				setCountry(responseJson);
			} catch (error: any) {
				setError(error);
			}
		};
		getCountryData();
	}, [countryName]);
	return [country, error];
}

// https://restcountries-v2.herokuapp.com/country/%7Bname%7D

// function useCountry(countryName: string) {
// 	const [countryData, setCountry] = useState<CountryType>();
// 	const [error, setError] = useState();

// 	useEffect(() => {
// 		const countryData = async () => {
// 			try {
// 				const data = await fetch(`https://restcountries.com/v2/name/${countryName}`);
// 				const singleCountryData = await data.json();
// 				console.log(singleCountryData);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		};
// 		countryData();
// 	}, [countryName]);

// 	return [countryData, error];
// }
export default useCountry;
