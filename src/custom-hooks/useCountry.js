// This hook is used to fetch one specific country
import { useState, useEffect } from "react";

function useCountry (countryName) {
    const [country, setCountry] = useState([]);
    const [error, setError] = useState('')
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`

        useEffect(() => {
            const countryData = async () => {
                try{
                    const data = await fetch(url)
                    
                    const dataJson = await data.json()
                    setCountry(dataJson)

                } catch(error) {
                    setError(error)
                }
            }; 
            countryData();
        }, [url])
        return [country, error]
}

export default useCountry;

