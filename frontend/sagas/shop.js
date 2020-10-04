import axios from "axios";
import { all, put, fork, call, takeLatest } from "redux-saga/effects";
import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE } from "../reducers/shop";

function addProductApi(data) {
  return axios.post("/products/add", data, {
    withCredentials: true,
  });
}

function* addProduct(action) {
  try {
    const result = yield call(addProductApi, action.formData);
    yield put({ type: ADD_PRODUCT_SUCCESS, data: result.data });
  } catch (e) {
    console.log(e);
    yield put({ type: ADD_PRODUCT_FAILURE, error: e });
  }
}

function* watchAddProduct() {
  yield takeLatest(ADD_PRODUCT_REQUEST, addProduct);
}

export default function* productsSaga() {
  yield all([fork(watchAddProduct)]);
}
