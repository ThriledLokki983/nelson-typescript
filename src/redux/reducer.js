const defaultState = {
  cart: [],
  countries: [],
  country: [],
};

const reducer = (state = defaultState, action) => {
  // action = {type: action and type }
  switch (action.type) {
    case "INSERT_COUNTRY":
      const incomingCountry = action.payload; //<= country object
      const incomingName = incomingCountry.name;
      const existingCountry = state.cart.find((country) => {
        if (incomingName === country.name) {
          return true;
        }
        return false;
      });

      if (existingCountry) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, incomingCountry],
        };
      }

    case "DELETE_COUNTRY":
      const getCountry = action.payload;
      return {
        ...state,
        cart: [...state.cart.filter((country) => getCountry !== country.name)],
      };

    case "FETCH_COUNTRY_SUCCES":
      const countriesPayload = action.payload;
      return {
        ...state,
        countries: countriesPayload,
      };

    case "FETCH_ONE_COUNTRY_SUCCES":
      const countryData = action.payload[0];
      return {
        ...state,
        country: countryData,
      };

    default:
      return state;
  }
};

export default reducer;
