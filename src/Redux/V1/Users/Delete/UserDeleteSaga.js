import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/Delete/UserDeleteActionType";
import UserDeleteAction from "Redux/V1/Users/Delete/UserDeleteAction";
import UserService from "Services/V1/UserService";

function* userDELETE(data) {
	//console.log(data, "saga delete");
	try {
		const response = yield UserService.userDelete(data.request);
		if (response.success) {
			yield put(UserDeleteAction.deleteUserSuccess(response.data));
			console.log("success deleteUserSuccess saga");
		} else {
			yield put(UserDeleteAction.deleteUserFailed(response.error));
			console.log("deleteUserFailed saga");
		}
	} catch (error) {
		console.log(error, "error saga");
	}
}

export function* UserDeleteSaga() {
	yield takeEvery(USER.USER_DELETE, userDELETE);
}
