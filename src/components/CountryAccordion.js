import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import useCountry from '../custom-hooks/useCountry';
import { useEffect, useState } from 'react';


function CountryAccordion (countryName) {
    
    const [countryData, setCountryData] = useState()
    const [country, error] = useCountry()


    return (        
            <Accordion>
                <React.Fragment>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Native Name:</Accordion.Header>
                        <Accordion.Body>{countryName.nativeName}</Accordion.Body>
                    </Accordion.Item>                                            
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Region:</Accordion.Header>
                        <Accordion.Body>{countryName.region}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Currency:</Accordion.Header>
                        <Accordion.Body>{countryName.currencies}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                       <Accordion.Header>Languages:</Accordion.Header>
                       <Accordion.Body>{countryName.languages}</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" >
                        <Accordion.Header>Population:</Accordion.Header>
                        <Accordion.Body>{countryName.population}</Accordion.Body>
                    </Accordion.Item>
                </React.Fragment>       
            </Accordion>           
    );
}
export default CountryAccordion