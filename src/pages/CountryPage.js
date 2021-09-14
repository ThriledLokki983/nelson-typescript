import React from "react";
import { useParams } from "react-router";
import useCountry from "../custom-hooks/useCountry";
import NotFound from "./NotFound";
import CountryCard from "../components/CountryCard";
import HeaderCountryPage from "../components/HeaderCountryPage";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function CountryPage ({ match }) {
    const name = match.params.name;


    return(
        <React.Fragment>
        <HeaderCountryPage/>
        <NavigationBar />
        <CountryCard  name={name}/>
        <Footer/>
        </React.Fragment>
    )
}


export default CountryPage