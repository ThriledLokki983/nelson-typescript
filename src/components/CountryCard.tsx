/** @format */

import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CountryAccordion from "../components/CountryAccordion";
import useCountry from "../custom-hooks/useCountry";
import Button from "react-bootstrap/Button";
import { CountryType } from "../redux/reducer";
type CountryProps = {
	countryName: string;
};
function CountryCard({ countryName }: CountryProps) {
	const [data, error] = useCountry(countryName);

	return (
		<Container>
			<Card className="mx-auto shadow card-container" style={{ width: "40%" }}>
				<Card.Header as="h3" style={{ textAlign: "center" }}>
					{/* {data.name} */}
				</Card.Header>
				<Card.Img
					className="p-2 mx-auto"
					variant="top"
					src={data[0].flag}
					style={{ width: "60%" }}
				/>
				<Card.Body>
					<CountryAccordion countryData={data} error={error} />
					<Button
						className="d-block mx-auto my-3 button-card"
						variant="outline-secondary"
					>
						<Link className="text-decoration-none text-black-50" to="/">
							Go Home
						</Link>
					</Button>
				</Card.Body>
				<Card.Footer className="text-muted">Created by NRosales</Card.Footer>
			</Card>
		</Container>
	);
}

export default CountryCard;
