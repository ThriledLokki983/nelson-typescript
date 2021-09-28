/** @format */

import React from "react";
import HeroText from "../components/HeroText";
import Footer from "../components/Footer";
import TableContent from "../components/TableContent";
import { useState } from "react";

function HomePage() {
	const [data, searhData] = useState();

	return (
		<React.Fragment>
			<HeroText />
			<TableContent />
			<Footer />
		</React.Fragment>
	);
}

export default HomePage;
