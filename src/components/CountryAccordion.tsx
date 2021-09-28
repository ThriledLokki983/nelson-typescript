/** @format */

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { CountryType } from "../redux/reducer";

type CountryAccordProps = {
	countryData: CountryType | undefined;
	error: any;
};

function CountryAccordion({ countryData, error }: CountryAccordProps) {
	return (
		<Accordion>
			{countryData ? (
				<>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Native Name:</Accordion.Header>
						<Accordion.Body className="fst-italic">{""}</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Region:</Accordion.Header>
						<Accordion.Body className="fst-italic">{""}</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Capital:</Accordion.Header>
						<Accordion.Body className="fst-italic">{""}</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>Currency:</Accordion.Header>
						{countryData[0].currencies.map((item: CountryType) => (
							<Accordion.Body className="fst-italic" key={item.name}>
								{item.name}
							</Accordion.Body>
						))}
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>Languages:</Accordion.Header>
						{/* {countryData[0]?.languages?.map((item) => (
					<Accordion.Body className="fst-italic">{item.name}</Accordion.Body>
				))} */}
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header>Borders:</Accordion.Header>
						{countryData[0]?.borders?.map((item: CountryType) => (
							<Accordion.Body className="fst-italic" key={item.capital}>
								{item}
							</Accordion.Body>
						))}
					</Accordion.Item>
					<Accordion.Item eventKey="6">
						<Accordion.Header>Population:</Accordion.Header>
						<Accordion.Body className="fst-italic">
							{countryData[0].population}
						</Accordion.Body>
					</Accordion.Item>
				</>
			) : (
				<></>
			)}
		</Accordion>
	);
}

export default CountryAccordion;
