import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import shop from "./shop";
import menu from "./menu";

const rootReducers = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  shop,
  menu,
});

export default rootReducers;
