import React from "react";
import Header from "../components/Header"
import NavigationBar from "../components/NavigationBar";
import HeroText from "../components/HeroText";
import Footer from "../components/Footer";
import TableContent from "../components/TableContent";


function HomePage () {
    return (
        <React.Fragment>
        <Header />
        <NavigationBar />
        <HeroText />
        <TableContent />
        <Footer />
        </React.Fragment>
    )
}

export default HomePage