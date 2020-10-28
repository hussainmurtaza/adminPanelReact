import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/Get/UserGetActionType";
import UsersAction from "Redux/V1/Users/Get/UserGetAction";
import UserService from "Services/V1/UserService";

function* userGet() {
	try {
		const response = yield UserService.getAll();
		if (response.success) {
			yield put(UsersAction.getUsersSuccess(response.data));
		} else {
			yield put(UsersAction.getUsersFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* UserGetSaga() {
	yield takeEvery(USER.USERS_GET, userGet);
}
