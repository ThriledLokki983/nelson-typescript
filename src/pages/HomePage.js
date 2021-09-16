import React from "react";
import NavigationBar from "../components/NavigationBar";
import HeroText from "../components/HeroText";
import Footer from "../components/Footer";
import TableContent from "../components/TableContent";
import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <React.Fragment>
      <NavigationBar />
      <HeroText />
      <SearchBar />
      <TableContent />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
