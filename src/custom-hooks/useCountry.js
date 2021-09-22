// This hook is used to fetch one specific country
import { useState, useEffect } from "react";

function useCountry(name) {
  const [countryData, setCountry] = useState(name);
  const [error, setError] = useState();
  const url = `https://restcountries-v2.herokuapp.com/country/${name}`;
  console.log("hook");
  console.log("hook-name", name);

  useEffect(() => {
    console.log("running");
    const countryData = async () => {
      try {
        const data = await fetch(url);
        const dataJson = await data.json();
        console.log("test002", dataJson);
        setCountry(dataJson);
      } catch (error) {
        setError(error);
        console.log("error", error);
      }
    };

    countryData();
  }, [url, name]);

  return [countryData, error];
}
export default useCountry;
