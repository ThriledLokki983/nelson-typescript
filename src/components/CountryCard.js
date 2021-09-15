import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { useParams } from "react-router";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import CountryAccordion from "../components/CountryAccordion";
import useCountry from "../custom-hooks/useCountry";

function CountryCard ( {name, countries} ) {  
 const data = []
 
 
   
    return (
        <Container style={{height: '82vh'}}>
          <Card className='my-5 mx-auto shadow rounded' style={{width: '40%', backgroundColor:"whitesmoke"}}>
            <Card.Header as="h3" style={{textAlign: 'center'}}></Card.Header>
                <Card.Img className="p-2 mx-auto" variant="top"  style={{width: '60%'}}/>                              
                  <Card.Body>
                     {/* <CountryAccordion country={data} error={error} />                    */}
                  </Card.Body>
            <Card.Footer className="text-muted">Created by NRosales</Card.Footer>
          </Card>
        </Container>
        
    )
}

export default CountryCard