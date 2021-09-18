const insertCart = (country) => {
  return {
    type: "INSERT_COUNTRY",
    payload: country,
  };
};

const removeCart = (countryName) => {
  return {
    type: "DELETE_COUNTRY",
    payload: countryName,
  };
};
