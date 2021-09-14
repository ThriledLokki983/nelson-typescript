import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import CountryAccordion from "../components/CountryAccordion";
import useCountry from "../custom-hooks/useCountry";
import { useEffect, useState } from 'react';

function CountryCard ( {name}) {
  
  const [data, error] = useCountry(name)
  console.log('data1', name)
  console.log('test5', name[0].nativeName)

   
    return (
        <Container> 
          <Card>
            <Card.Header as="h3">{name.toUpperCase()}</Card.Header>
                <Card.Img variant="top" src={name.flag} />
                              
                  <Card.Body>
                    <CountryAccordion  country={name} error={error}/>
                             
                  </Card.Body>
            <Card.Footer className="text-muted">Created by NRosales</Card.Footer>
          </Card>
        </Container>
    )
}

export default CountryCard