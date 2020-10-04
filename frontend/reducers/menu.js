const initialState = {
  products: [],
  cart: [],
};

export const LOAD_PRODUCTS_REQUEST = "LOAD_PRODUCTS_REQUEST";
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
export const LOAD_PRODUCTS_FAILURE = "LOAD_PRODUCTS_FAILURE";

export const ADD_QUANTITY_REQUEST = "ADD_QUANTITY_REQUEST";
export const ADD_QUANTITY_SUCCESS = "ADD_QUANTITY_SUCCESS";
export const ADD_QUANTITY_FAILURE = "ADD_QUANTITY_FAILURE";

export const SUBSTRACT_QUANTITY_REQUEST = "SUBSTRACT_QUANTITY_REQUEST";
export const SUBSTRACT_QUANTITY_SUCCESS = "SUBSTRACT_QUANTITY_SUCCESS";
export const SUBSTRACT_QUANTITY_FAILURE = "SUBSTRACT_QUANTITY_FAILURE";

export const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";

export const LOAD_CART_REQUEST = "LOAD_CART_REQUEST";
export const LOAD_CART_SUCCESS = "LOAD_CART_SUCCESS";
export const LOAD_CART_FAILURE = "LOAD_CART_FAILURE";

export const ADD_CART_ITEM_REQUEST = "ADD_CART_ITEM_REQUEST";
export const REMOVE_CART_ITEM_REQUEST = "REMOVE_CART_ITEM_REQUEST";
export const ADD_ITEM_QUANTITY_REQUEST = "ADD_ITEM_QUANTITY_REQUEST";
export const SUBSTRACT_ITEM_QUANTITY_REQUEST = "SUBSTRACT_ITEM_QUANTITY_REQUEST";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUANTITY_SUCCESS: {
      const index = state.products.findIndex((product) => product.id === action.data.id);
      const product = state.products[index];
      let quantity = product.quantity;
      quantity < 9 ? (quantity += 1) : 9;
      const products = [...state.products];
      products[index] = { ...product, quantity };

      return {
        ...state,
        products,
      };
    }

    case SUBSTRACT_QUANTITY_SUCCESS: {
      const index = state.products.findIndex((product) => product.id === action.data.id);
      const product = state.products[index];
      let quantity = product.quantity;
      quantity > 1 ? (quantity -= 1) : 1;
      const products = [...state.products];
      products[index] = { ...product, quantity };
      return {
        ...state,
        products,
      };
    }

    case LOAD_PRODUCTS_REQUEST: {
      return {
        ...state,
      };
    }

    case LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [...action.data],
      };
    }

    case LOAD_PRODUCTS_FAILURE: {
      return {
        ...state,
      };
    }

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

    case REMOVE_CART_ITEM_REQUEST: {
      const items = state.cart.filter((v) => v.id !== action.id);
      return {
        ...state,
        cart: [...items],
      };
    }

    case ADD_CART_ITEM_REQUEST: {
      const listIndex = state.cart.findIndex((v) => v.id === action.id);
      const itemIndex = state.products.findIndex((v) => v.id === action.id);
      if (listIndex !== -1) {
        const cart = [...state.cart];
        const products = [...state.products];
        const item = products[itemIndex];
        const cartItem = cart[listIndex];
        cart[listIndex].quantity = cartItem.quantity + item.quantity;
        const productsList = [
          ...state.products.filter((v) => v.id !== action.id),
          { ...item, quantity: 1 },
        ].sort((a, b) => {
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        });
        return {
          ...state,
          products: productsList,
          cart: cart,
        };
      } else {
        const products = [...state.products];
        const item = products[itemIndex];
        const productsList = [
          ...state.products.filter((v) => v.id !== action.id),
          { ...item, quantity: 1 },
        ].sort((a, b) => {
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        });
        return {
          ...state,
          products: productsList,
          cart: [...state.cart, item],
        };
      }
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
