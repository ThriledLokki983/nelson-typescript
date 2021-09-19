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
