import { all } from "redux-saga/effects";
import LoginRootSaga from "Redux/V1/Auth/Login/LoginRootSaga";

export default function* rootSaga() {
    yield all([LoginRootSaga()]);
}
