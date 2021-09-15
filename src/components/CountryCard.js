import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import CountryAccordion from "../components/CountryAccordion";
import useCountry from "../custom-hooks/useCountry";

function CountryCard ( { name }) {  
  const [data, error] = useCountry(name)
    console.log('data1', name)
  console.log('test5',data[0].nativeName)
  console.log('test6',data[0].name)
  console.log('data', data)
  console.log('flag', data[0].flag)

   
    return (
        <Container style={{height: '82vh'}}>
          <Card className='my-5' style={{width: '40%'}}>
            <Card.Header as="h3">{name.toUpperCase()}</Card.Header>
                <Card.Img className="p-2" variant="top" src={data[0].flag} style={{width: '50%'}}/>                              
                  <Card.Body>
                    <CountryAccordion  country={data} error={error}/>                             
                  </Card.Body>
            <Card.Footer className="text-muted">Created by NRosales</Card.Footer>
          </Card>
        </Container>
        
    )
}

export default CountryCard