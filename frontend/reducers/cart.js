const initialState = {
  cart: [],
};

export const LOAD_CART_REQUEST = "LOAD_CART_REQUEST";
export const LOAD_CARD_SUCCESS = "LOAD_CART_SUCCESS";
export const LOAD_CARD_FAILURE = "LOAD_CART_FAILURE";

export const REMOVE_ITEM_REQUEST = "REMOVE_ITEM_REQUEST";
export const REMOVE_ITEM_SUCCESS = "REMOVE_ITEM_SUCCESS";
export const REMOVE_ITEM_FAILURE = "REMOVE_ITEM_FAILURE";

export const ADD_ITEM_QUANTITY_REQUEST = "ADD_ITEM_QUANTITY_REQUEST";

export const SUBSTRACT_ITEM_QUANTITY_REQUEST = "SUBSTRACT_ITEM_QUANTITY_REQUEST";
export const SUBSTRACT_ITEM_QUANTITY_SUCCESS = "SUBSTRACT_ITEM_QUANTITY_SUCCESS";
export const SUBSTRACT_ITEM_QUANTITY_FAILURE = "SUBSTRACT_ITEM_QUANTITY_FAILURE";

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case LOAD_CART_REQUEST: {
      return {
        ...state,
      };
    }

    case LOAD_CART_SUCCESS: {
      return {
        ...state,
        cart: [...state.cart, action.data],
      };
    }

    case LOAD_CART_FAILURE: {
      return {
        ...state,
      };
    }

    case REMOVE_ITEM_REQUEST: {
      const items = state.cart.filter((v) => v.id !== action.id);
      return {
        ...state,
        cart: [...items],
      };
    }

    case ADD_ITEM_REQUEST: {
      const newItem = state.cart.filter((v) => v.id === action.id);
      return {
        ...state,
        cart: [...state.cart],
      };
    }

    default: {
      return { ...state };
    }
  }
};
