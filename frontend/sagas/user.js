import { fork, takeEvery, all, put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  BIZCODE_CONFIRM_FAILURE,
  BIZCODE_CONFIRM_SUCCESS,
  BIZCODE_CONFIRM_REQUEST,
  EMAIL_CONFIRM_REQUEST,
  EMAIL_CONFIRM_SUCCESS,
  EMAIL_CONFIRM_FAILURE,
} from "../reducers/user";

function loginApi(loginData) {
  return axios.post("/user/login", loginData, { withCredentials: true });
}

function* login(action) {
  try {
    const result = yield call(loginApi, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpApi(signUpData) {
  return axios.post("/user/signup", signUpData);
}

function* signUp(action) {
  try {
    const result = yield call(signUpApi, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function loadUserApi() {
  // 서버에 요청을 보내는 부분

  return axios.get("/user");
}

function* loadUser() {
  try {
    const result = yield call(loadUserApi);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e,
    });
  }
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function logoutApi() {
  return axios.post("/user/logout", {});
}

function* logout() {
  try {
    yield call(logoutApi);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e,
    });
  }
}

function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logout);
}

function bizcodeConfirmApi(bizcode) {
  return axios.post("/user/confirm/bizcode", { bizcode });
}

function* bizcodeConfirm(action) {
  try {
    const result = yield call(bizcodeConfirmApi, action.bizcode);
    yield put({
      type: BIZCODE_CONFIRM_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: BIZCODE_CONFIRM_FAILURE,
      error: e,
    });
  }
}

function* watchBizcodeConfirm() {
  yield takeLatest(BIZCODE_CONFIRM_REQUEST, bizcodeConfirm);
}

function emailConfirmApi(email) {
  return axios.post("/user/confirm/email", { email });
}

function* emailConfirm(action) {
  try {
    const result = yield call(emailConfirmApi, action.email);
    yield put({
      type: EMAIL_CONFIRM_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    yield put({
      type: EMAIL_CONFIRM_FAILURE,
      error: e,
    });
  }
}

function* watchEmailConfirm() {
  yield takeLatest(EMAIL_CONFIRM_REQUEST, emailConfirm);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchSignUp),
    fork(watchBizcodeConfirm),
    fork(watchEmailConfirm),
  ]);
}
