import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/Put/UserPutActionType";
import UsersPutAction from "Redux/V1/Users/Put/UserPutAction";
import UserService from "Services/V1/UserService";
import ToastHelper from "Helpers/ToastHelper";

function* userPut(data) {
	try {
		const response = yield UserService.put(
			data.request.form,
			data.request.id
		);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(UsersPutAction.userPutSuccess(response.data));
		} else {
			ToastHelper.error(response.error.message);
			yield put(UsersPutAction.userPutFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* userPutSaga() {
	yield takeEvery(USER.USERS_PUT, userPut);
}
