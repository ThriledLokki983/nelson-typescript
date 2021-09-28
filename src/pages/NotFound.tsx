/** @format */

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function NotFound() {
	return (
		<React.Fragment>
			<Header />

			<Container className="not-found" fluid>
				<h1>404: Not Found</h1>
			</Container>
			<Footer />
		</React.Fragment>
	);
}

export default NotFound;
