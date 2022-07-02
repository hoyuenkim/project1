import produce from "immer";

const initialState = {
  stocks: [],
  originalStocks: [],
};

export const LOAD_LIST_REQUEST = "LOAD_LIST_REQUEST";
export const LOAD_LIST_SUCCESS = "LOAD_LIST_SUCCESS";
export const LOAD_LIST_FAILURE = "LOAD_LIST_FAILURE";

export const PLUS_QUANTITY_SUCCESS = "PLUS_QUANTITY_SUCCESS";

export const MINUS_QUANTITY_SUCCESS = "MINUS_QUANTITY_SUCCESS";

export const INITIATE_STOCK_QUANTITY_SUCCESS = "INITIATE_STOCK_QUANTITY_SUCCESS";

export const SEARCH_STOCK_PRODUCT_SUCCESS = "SEARCH_STOCK_PRODUCT_SUCCESS";

export const SELECT_STOCK_CATEGORY_SUCCESS = "SELECT_STOCK_CATEGORY_SUCCESS";

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_LIST_REQUEST:
        break;
      case LOAD_LIST_SUCCESS:
        draft.stocks = action.data.products;
        draft.originalStocks = action.data.products;
        break;
      case LOAD_LIST_FAILURE:
        break;

      case PLUS_QUANTITY_SUCCESS:
        {
          const product = draft.stocks.find((stock) => stock.id === action.data.id);
          let quantity = product.quantity;
          const stock = product.stock;
          quantity = quantity < stock ? (quantity += 1) : product.quantity;
          product.quantity = quantity;
        }
        break;

      case MINUS_QUANTITY_SUCCESS:
        {
          const product = draft.stocks.find((stock) => stock.id === action.data.id);
          let quantity = product.quantity;
          quantity = quantity > 1 ? (quantity -= 1) : 1;
          product.quantity = quantity;
        }
        break;

      case INITIATE_STOCK_QUANTITY_SUCCESS: {
        const product = draft.stocks.find((stock) => stock.id === action.data.id);
        product.quantity = 1;
      }

      case SEARCH_STOCK_PRODUCT_SUCCESS:
        {
          const products = draft.originalStocks.filter((stock) =>
            stock.title.includes(action.data.text),
          );
          draft.stocks = products;
        }
        break;

      case SELECT_STOCK_CATEGORY_SUCCESS:
        {
          const products = draft.originalStocks.filter(
            (stock) => stock.Category.id === action.data.id,
          );
          draft.stocks = products;
        }
        break;

      default:
        state;
        break;
    }
  });
};
