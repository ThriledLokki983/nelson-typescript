import React from "react";
import { useParams } from "react-router-dom";
import useCountry from "../custom-hooks/useCountry";
import NotFound from "./NotFound";
import CountryCard from "../components/CountryCard";
import HeaderCountryPage from "../components/HeaderCountryPage";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function Cart() {
  const { name } = useParams();
  console.log("paramsName", name);
  return (
    <React.Fragment>
      <HeaderCountryPage />
      <NavigationBar />

      <Footer />
    </React.Fragment>
  );
}

export default Cart;
