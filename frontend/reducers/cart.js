import producer from "immer";

const initialState = {
  cart: [],
  isLoadingCart: false,
  isRemoveingCart: false,
  ShopId: undefined,
  TableId: undefined,
};

export const LOAD_CART_REQUEST = "LOAD_CART_REQUEST";
export const LOAD_CART_SUCCESS = "LOAD_CART_SUCCESS";
export const LOAD_CART_FAILURE = "LOAD_CART_FAILURE";

export const REMOVE_ITEM_REQUEST = "REMOVE_ITEM_REQUEST";
export const REMOVE_ITEM_SUCCESS = "REMOVE_ITEM_SUCCESS";
export const REMOVE_ITEM_FAILURE = "REMOVE_ITEM_FAILURE";

export const ADD_ITEM_QUANTITY_REQUEST = "ADD_ITEM_QUANTITY_REQUEST";
export const SUBSTRACT_ITEM_QUANTITY_REQUEST = "SUBSTRACT_ITEM_QUANTITY_REQUEST";

export const ADD_CART_ITEM_REQUEST = "ADD_CART_ITEM_REQUEST";
export const REMOVE_CART_ITEM_REQUEST = "REMOVE_CART_ITEM_REQUEST";

export const CLEAR_CART_REQUEST = "CLEAR_CART_REQUEST";

export const GET_SHOP_TABLE_ID = "GET_SHOP_TABLE_ID";

export const SOLD_CART_SUCCESS = "SOLD_CART_SUCCESS";

export default (state = initialState, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case LOAD_CART_REQUEST:
        break;
      case LOAD_CART_SUCCESS:
        draft.cart = [action.data];
        break;
      case LOAD_CART_FAILURE:
        break;

      case REMOVE_ITEM_REQUEST:
        const items = draft.cart.filter((item) => item.id !== action.id);
        draft.cart = items;
        break;
      case ADD_CART_ITEM_REQUEST:
        {
          const product = draft.cart.find((v) => v.id === action.product.id);
          if (product) {
            product.quantity = product.quantity + action.product.quantity;
            break;
          }
          draft.cart.push(action.product);
        }
        break;
      case ADD_ITEM_QUANTITY_REQUEST:
        {
          const product = draft.cart.find((stock) => stock.id === action.data.id);
          console.log(product.quantity);
          console.log(product.stock);
          let quantity = product.quantity;
          const stock = product.stock;
          quantity = quantity < stock ? (quantity += 1) : product.quantity;
          product.quantity = quantity;
        }
        break;
      case SUBSTRACT_ITEM_QUANTITY_REQUEST:
        {
          const product = draft.cart.find((stock) => stock.id === action.data.id);
          let quantity = product.quantity;
          quantity = quantity > 1 ? (quantity -= 1) : 1;
          product.quantity = quantity;
        }
        break;
      case CLEAR_CART_REQUEST:
        draft.cart = [];
        break;
      case GET_SHOP_TABLE_ID:
        draft.ShopId = action.data.ShopId;
        draft.TableId = action.data.TableId;
        break;
      case SOLD_CART_SUCCESS:
        {
          const cart = state.cart;
          const products = action.data;
          const result = cart.map((item) => {
            const product = products.find((v) => v.id === item.id);
            const quantity = item.quantity - product.quantity;
            return { ...item, quantity };
          });
          draft.cart = [state.cart, ...result];
        }
        break;
      default:
        state;
        break;
    }
  });
};
