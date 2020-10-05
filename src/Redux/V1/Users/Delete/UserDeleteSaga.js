import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/Delete/UserDeleteActionType";
import UserDeleteAction from "Redux/V1/Users/Delete/UserDeleteAction";
import UserGetAction from "Redux/V1/Users/Get/UserGetAction";
import UserService from "Services/V1/UserService";
import ToastHelper from "Helpers/ToastHelper";

function* userDELETE(data) {
	//console.log(data, "saga delete");
	try {
		const response = yield UserService.userDelete(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(UserDeleteAction.deleteUserSuccess(response.data));
			yield put(UserGetAction.getUsers());
		} else {
			ToastHelper.error(response.error.message);
			yield put(UserDeleteAction.deleteUserFailed(response.error));
			console.log("deleteUserFailed saga");
		}
	} catch (error) {
		ToastHelper.error();
		console.log(error, "error saga");
	}
}

export function* UserDeleteSaga() {
	yield takeEvery(USER.USER_DELETE, userDELETE);
}
