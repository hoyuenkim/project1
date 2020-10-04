const initialState = {
  shop: null,
};

export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST: {
      return {
        ...state,
      };
    }

    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: [action.data, ...state.products],
      };
    }

    case ADD_PRODUCT_FAILURE: {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
