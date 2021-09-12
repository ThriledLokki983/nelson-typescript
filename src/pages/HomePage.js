import React from "react";
import Header from "../components/Header"
import Navibar from "../components/NaviBar";
import HeroText from "../components/HeroText";
import Footer from "../components/Footer";
import TableContent from "../components/TableContent";


function HomePage () {
    return (
        <React.Fragment>
        <Header />
        <Navibar />
        <HeroText />
        <TableContent />
        <Footer />
        </React.Fragment>
    )
}

export default HomePage