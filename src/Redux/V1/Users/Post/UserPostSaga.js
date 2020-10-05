import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/Post/UserPostActionType";
import UsersAction from "Redux/V1/Users/Post/UserPostAction";
import UserService from "Services/V1/UserService";
import ToastHelper from "Helpers/ToastHelper";

function* userPOST(data) {
	try {
		const response = yield UserService.post(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(UsersAction.postUsersSuccess(response.data));
			setTimeout(function () {
				window.location.href = "/users";
			}, 1000);
		} else {
			ToastHelper.error(response.error.message);
			yield put(UsersAction.postUsersFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* UserPostSaga() {
	yield takeEvery(USER.USERS_POST, userPOST);
}
