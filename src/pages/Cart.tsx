/** @format */

import React from "react";
import HeaderCountryPage from "../components/HeaderCountryPage";
import Footer from "../components/Footer";
import TableCart from "../components/TableCart";

function Cart() {
	return (
		<React.Fragment>
			<HeaderCountryPage />
			<TableCart />
			<Footer />
		</React.Fragment>
	);
}

export default Cart;
