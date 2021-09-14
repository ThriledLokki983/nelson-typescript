import React from 'react';
import Accordion from 'react-bootstrap/Accordion'


function CountryAccordion ({ country } ) {
    console.log('countries', country)
    console.log('testacc01', country.nativeName)
    

    return (        
            <Accordion>
                <React.Fragment>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Native Name:</Accordion.Header>
                        <Accordion.Body >{country.nativeName}</Accordion.Body>                     
                    </Accordion.Item>                                            
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Region:</Accordion.Header>
                        <Accordion.Body>{country.region}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Currency:</Accordion.Header>
                        <Accordion.Body>{country.currencies}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                       <Accordion.Header>Languages:</Accordion.Header>
                       <Accordion.Body>{country.languages}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" >
                        <Accordion.Header>Population:</Accordion.Header>
                        <Accordion.Body>{country.population}</Accordion.Body>
                    </Accordion.Item>
                </React.Fragment>       
            </Accordion>           
    );
}
export default CountryAccordion