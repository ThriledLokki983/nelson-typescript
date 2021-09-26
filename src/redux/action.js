export const insertCart = (country) => {
  return {
    type: "INSERT_COUNTRY",
    payload: country,
  };
};

export const removeCart = (countryName) => {
  return {
    type: "DELETE_COUNTRY",
    payload: countryName,
  };
};



export const getCountries = () => {
  return async (dispatch, getState) => {
    try {
      const data = await fetch("https://restcountries.eu/rest/v2/all");
      const countriesList = await data.json();
      console.log("countries", countriesList);

      dispatch(fetchCountrySuccess(countriesList));
    } catch (error) {
      console.log("error", error);
      dispatch(fetchError(error));
    }
  };
};

export const fetchCountrySuccess = (data) => {
  return {
    type: "FETCH_COUNTRY_SUCCES",
    payload: data,
  };
};

export const getOneCountry = (name) => {
  return async (dispatch, getState) => {
    const data = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const dataJson = await data.json();

    dispatch(fetchOneCountrySuccess(dataJson));
  };
};

export const fetchOneCountrySuccess = (data) => {
  return {
    type: "FETCH_ONE_COUNTRY_SUCCES",
    payload: data,
  };
};

export const fetchError = (error) => {
  return {
    type: "FETCH_ERROR",
    payload: error,
  };
};
