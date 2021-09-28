/** @format */

import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

function Footer() {
	return (
		<Container className="footer-container" fluid>
			<Row className="footer-text">
				<Col>
					<p>Created by NRosales</p>
				</Col>
				<Col>
					<FaLinkedin className="footer-icon" size={20} />
					<FaTwitterSquare className="footer-icon" size={20} />
					<FaFacebookSquare className="footer-icon" size={20} />
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
