import React from "react";
import { useParams } from "react-router"
import { Accordion, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import CountryAccordion from "../components/CountryAccordion";
import useCountry from "../custom-hooks/useCountry";

function CountryCard () { 
  const {name} = useParams()
  const [data, error] = useCountry(name)
  console.log('card', data)

   
    return (
        <Container style={{height: '82vh'}}>
          <Card className='my-5 mx-auto ' style={{width: '40%', backgroundColor:"whitesmoke"}}>
            <Card.Header as="h3" style={{textAlign: 'center'}}>{data[0]?.name}</Card.Header>
                <Card.Img className="p-2 mx-auto" variant="top" src={data[0]?.flag} style={{width: '60%'}}/>                              
                  <Card.Body>
                    <CountryAccordion country={data} error={error} />                   
                  </Card.Body>
            <Card.Footer className="text-muted">Created by NRosales</Card.Footer>
          </Card>
        </Container>
        
    )
}

export default CountryCard