import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import CountryAccordion from "../components/CountryAccordion";
import useCountries from "../custom-hooks/useCountries";

function CountryCard () {

  const [countriesData, error] = useCountries()
  
    return (
        <Container> 
          <Card>
            <Card.Header as="h3"></Card.Header>
                <Card.Img variant="top" />
                              
                  <Card.Body>
                    <CountryAccordion  />
                             
                  </Card.Body>
            <Card.Footer className="text-muted">Created by NRosales</Card.Footer>
          </Card>
        </Container>
    )
}

export default CountryCard