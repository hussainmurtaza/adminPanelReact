import { all } from "redux-saga/effects";
import {
    loginPostSaga,
    loginPostSuccessSaga,
    loginPostFailedSaga,
} from "Redux/V1/Auth/Login/LoginPostSaga";

export default function* LoginRootSaga() {
    yield all([loginPostSaga(), loginPostSuccessSaga(), loginPostFailedSaga()]);
}
