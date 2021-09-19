const defaultState = {
  cart: [],
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
      return {
        ...state,
        currentCountry: null,
      };

    default:
      return state;
  }
};

export default reducer;
