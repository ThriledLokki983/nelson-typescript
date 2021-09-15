// This hook is used to fetch one specific country
import { useState, useEffect } from "react";

function useCountry (name) {
    const [countryData, setCountry] = useState(name);
    const [error, setError] = useState()
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    

        useEffect(() => {
            const countryData = async () => {
                try{
                    const data = await fetch(url);                
                    const dataJson = await data.json();
                    console.log('test002', dataJson);
                    setCountry(dataJson);                    
                } catch(error) {
                    setError(error)
                }
            }; 
            console.log('countryData', countryData())
            countryData();
            
        }, [url]);
        console.log('url', url)
        return [countryData, error]        
};
export default useCountry;

