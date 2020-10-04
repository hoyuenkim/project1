import { all, fork } from "redux-saga/effects";
import axios from "axios";
import user from "./user";
import shop from "./shop";
import menu from "./menu";

axios.defaults.baseURL = `http://localhost:3065`;

function* rootSaga() {
  yield all([fork(user), fork(shop), fork(menu)]);
}

export default rootSaga;
