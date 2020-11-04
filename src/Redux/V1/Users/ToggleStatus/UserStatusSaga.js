import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/ToggleStatus/UserStatusActionType";
import UsersStatusAction from "Redux/V1/Users/ToggleStatus/UserStatusAction";
import UserStatusService from "Services/V1/UserStatusService";
import ToastHelper from "Helpers/ToastHelper";
// import UsersAction from "Redux/V1/Users/Filter/UserFilterAction";
import UsersAction from "Redux/V1/Users/Get/UserGetAction";

function* userStatus(data) {
	try {
		const response = yield UserStatusService.userStatus(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(UsersStatusAction.userStatusSuccess(response.data));
			yield put(UsersAction.getUsers(response.data));
			// setTimeout(() => {
			// 	window.location.reload();
			// }, 2000);
		} else {
			ToastHelper.error(response.error.message);
			yield put(UsersStatusAction.userStatusFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* userStatusSaga() {
	yield takeEvery(USER.USER_STATUS, userStatus);
}
