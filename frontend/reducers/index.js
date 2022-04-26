import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import user from './user';
import shop from './shop';
import menu from './menu';
import cart from './cart';
import payment from './payment';
import admin from './admin';

export const SET_CLIENT_STATE = 'SET_CLIENT_STATE';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    console.log(`action.type: ${action.type}`);
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  admin,
  user,
  shop,
  menu,
  cart,
  payment,
});

export default rootReducer;
