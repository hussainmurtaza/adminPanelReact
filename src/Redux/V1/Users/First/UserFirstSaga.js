import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/First/UserFirstActionType";
import UserFirstAction from "Redux/V1/Users/First/UserFirstAction";
import UserService from "Services/V1/UserService";

function* userDetails(data) {
	try {
		const response = yield UserService.get(data.request);
		if (response.success) {
			yield put(UserFirstAction.userFirstSuccess(response.data));
		} else {
			yield put(
				UserFirstAction.userFirstFailed(response.error.message)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* userFirstSaga() {
	yield takeEvery(USER.USER_FIRST, userDetails);
}
