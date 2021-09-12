// This hook is used to fetch all countries
import { useState, useEffect } from 'react';

function useCountries () {
    const [countries, setCountries] = useState([])
    const [error, setError] = useState()


    useEffect(() => {
            const getCountryData = async () => {
                try{
                    const response = await fetch("https://restcountries.eu/rest/v2/")
                    const responseJson = await response.json()
                    setCountries(responseJson)
                } catch(error){
                    setError(error)
                }
            }
            getCountryData()
    }, [])
    return [countries, error]
    }

    export default useCountries

