/** @format */
import React from "react";
import { useParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import HeaderCountryPage from "../components/HeaderCountryPage";
import Footer from "../components/Footer";
type ParamType = {
	countryName: string;
};

function CountryPage() {
	const { countryName } = useParams<ParamType>();

	return (
		<React.Fragment>
			<HeaderCountryPage />

			<CountryCard countryName={countryName} />
			<Footer />
		</React.Fragment>
	);
}

export default CountryPage;
