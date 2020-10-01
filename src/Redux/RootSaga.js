import { all } from "redux-saga/effects";
import LoginRootSaga from "Redux/V1/Auth/Login/LoginRootSaga";
import { UserGetSaga } from "Redux/V1/Users/Get/UserGetSaga";

export default function* rootSaga() {
	yield all([LoginRootSaga(), UserGetSaga()]);
}
