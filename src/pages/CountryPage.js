import React from "react";
import { useParams } from 'react-router-dom'
import useCountry from "../custom-hooks/useCountry";
import NotFound from "./NotFound";
import CountryCard from "../components/CountryCard";
import HeaderCountryPage from "../components/HeaderCountryPage";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function CountryPage ( { countries }) {
    const { name } = useParams()
    console.log('paramsName', name)
    console.log('countriesPage', countries)
    return(
        <React.Fragment>
        <HeaderCountryPage/>
        <NavigationBar />
        <CountryCard name={name} countries={countries}/>
        <Footer/>
        </React.Fragment>
    )
}


export default CountryPage