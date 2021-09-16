import React from "react";
import Accordion from "react-bootstrap/Accordion";

function CountryAccordion({ country, error }) {
  return (
    <Accordion>
      <React.Fragment>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Native Name:</Accordion.Header>
          <Accordion.Body className="fst-italic">
            {country[0]?.nativeName}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Region:</Accordion.Header>
          <Accordion.Body className="fst-italic">
            {country[0]?.region}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Capital:</Accordion.Header>
          <Accordion.Body className="fst-italic">
            {country[0]?.capital}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Currency:</Accordion.Header>
          {country[0]?.currencies?.map((item) => (
            <Accordion.Body className="fst-italic">{item.name}</Accordion.Body>
          ))}
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Languages:</Accordion.Header>
          {country[0]?.languages?.map((item) => (
            <Accordion.Body className="fst-italic">{item.name}</Accordion.Body>
          ))}
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Borders:</Accordion.Header>
          {country[0]?.borders?.map((item) => (
            <Accordion.Body className="fst-italic">{item}</Accordion.Body>
          ))}
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Population:</Accordion.Header>
          <Accordion.Body className="fst-italic">
            {country[0]?.population}
          </Accordion.Body>
        </Accordion.Item>
      </React.Fragment>
    </Accordion>
  );
}

export default CountryAccordion;
