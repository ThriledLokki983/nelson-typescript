import React from "react";
import NavigationBar from "../components/NavigationBar";
import HeroText from "../components/HeroText";
import Footer from "../components/Footer";
import TableContent from "../components/TableContent";
import useCountries from "../custom-hooks/useCountries";
import { useState } from "react";

function HomePage() {
  const [data, searhData] = useState();

  return (
    <React.Fragment>
      <NavigationBar />
      <HeroText />
      <TableContent />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
