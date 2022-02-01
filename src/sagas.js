import { GET_USERS_SUCCESS, GET_USERS_FETCH } from "./actions";
import { call, put, takeEvery } from "redux-saga/effects";

function usersFetch() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

function* workFetchUsers() {
  const users = yield call(usersFetch);
  yield put({ type: GET_USERS_SUCCESS, users });
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workFetchUsers);
}

export default mySaga;
