const initialState = {
  cart: [],
  isLoadingCart: false,
  isRemoveingCart: false,
  ShopId: undefined,
  TableId: undefined,
};

export const LOAD_CART_REQUEST = 'LOAD_CART_REQUEST';
export const LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS';
export const LOAD_CART_FAILURE = 'LOAD_CART_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const ADD_ITEM_QUANTITY_REQUEST = 'ADD_ITEM_QUANTITY_REQUEST';
export const SUBSTRACT_ITEM_QUANTITY_REQUEST = 'SUBSTRACT_ITEM_QUANTITY_REQUEST';

export const ADD_CART_ITEM_REQUEST = 'ADD_CART_ITEM_REQUEST';
export const REMOVE_CART_ITEM_REQUEST = 'REMOVE_CART_ITEM_REQUEST';

export const CLEAR_CART_REQUEST = 'CLEAR_CART_REQUEST';

export const GET_SHOP_TABLE_ID = 'GET_SHOP_TABLE_ID';

export default (state = initialState, action) => {
  switch (action.type) {
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
      const items = state.cart.filter((item) => item.id !== action.id);
      return {
        ...state,
        cart: [...items],
      };
    }

    case ADD_CART_ITEM_REQUEST: {
      const newProduct = action.product;
      const productIndex = state.cart.findIndex((v) => v.id === newProduct.id);
      if (productIndex !== -1) {
        const formerProduct = state.cart[productIndex];
        const finalProduct = {
          ...formerProduct,
          quantity: formerProduct.quantity + newProduct.quantity,
        };
        const cartList = [...state.cart.filter((v) => v.id !== newProduct.id), finalProduct];

        return {
          ...state,
          cart: cartList,
        };
      }
      return {
        ...state,
        cart: [...state.cart, newProduct],
      };
    }

    case ADD_ITEM_QUANTITY_REQUEST: {
      const index = state.cart.findIndex((cart) => cart.id == action.data.id);
      const product = state.cart[index];
      let quantity = product.quantity;
      quantity < 100 ? (quantity += 1) : 99;
      const cart = [...state.cart];
      cart[index] = { ...product, quantity };

      return {
        ...state,
        cart,
      };
    }

    case SUBSTRACT_ITEM_QUANTITY_REQUEST: {
      const index = state.cart.findIndex((cart) => cart.id === action.data.id);
      const product = state.cart[index];
      let quantity = product.quantity;
      quantity > 1 ? (quantity -= 1) : 1;
      const cart = [...state.cart];
      cart[index] = { ...product, quantity };
      return {
        ...state,
        cart,
      };
    }

    case CLEAR_CART_REQUEST: {
      return {
        ...state,
        cart: [],
      };
    }

    case GET_SHOP_TABLE_ID: {
      return {
        ...state,
        ShopId: action.data.ShopId,
        TableId: action.data.TableId,
      };
    }

    default: {
      return { ...state };
    }
  }
};
