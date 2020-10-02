import { all } from "redux-saga/effects";
import LoginRootSaga from "Redux/V1/Auth/Login/LoginRootSaga";
import { UserGetSaga } from "Redux/V1/Users/Get/UserGetSaga";
import { UserPostSaga } from "./V1/Users/Post/UserPostSaga";
import { UserDeleteSaga } from "./V1/Users/Delete/UserDeleteSaga";

export default function* rootSaga() {
	yield all([
		LoginRootSaga(),
		UserGetSaga(),
		UserPostSaga(),
		UserDeleteSaga(),
	]);
}
