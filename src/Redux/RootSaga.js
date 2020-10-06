import { all } from "redux-saga/effects";
import LoginRootSaga from "Redux/V1/Auth/Login/LoginRootSaga";
import { UserGetSaga } from "Redux/V1/Users/Get/UserGetSaga";
import { UserPostSaga } from "Redux/V1/Users/Post/UserPostSaga";
import { UserDeleteSaga } from "Redux/V1/Users/Delete/UserDeleteSaga";
import { userFirstSaga } from "Redux/V1/Users/First/UserFirstSaga";
import { RoleGetSaga } from "Redux/V1/Roles/Get/RoleGetSaga";
import { RolePostSaga } from "Redux/V1/Roles/Post/RolePostSaga";
import { roleDeleteSaga } from "Redux/V1/Roles/Delete/RoleDeleteSaga";
import { roleFirstSaga } from "Redux/V1/Roles/First/RoleFirstSaga";

export default function* rootSaga() {
	yield all([
		LoginRootSaga(),
		UserGetSaga(),
		UserPostSaga(),
		UserDeleteSaga(),
		userFirstSaga(),
		RoleGetSaga(),
		RolePostSaga(),
		roleDeleteSaga(),
		roleFirstSaga(),
	]);
}
