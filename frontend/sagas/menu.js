import axios from 'axios';
import { all, put, fork, call, takeLatest } from 'redux-saga/effects';
import {
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_REQUEST,
} from '../reducers/menu';

function loadProductApi(data) {
  return axios.post(`/menu`, { data });
}

function* loadProducts({ data }) {
  try {
    const result = yield call(loadProductApi, data);
    yield put({
      type: LOAD_PRODUCTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_PRODUCTS_FAILURE,
      error: e,
    });
  }
}

function* watchLoadProducts() {
  yield takeLatest(LOAD_PRODUCTS_REQUEST, loadProducts);
}

export default function* productsSaga() {
  yield all([fork(watchLoadProducts)]);
}
