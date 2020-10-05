import { takeEvery, put } from "redux-saga/effects";
import USER_DETAILS from "Redux/V1/Users/First/UserFirstActionType";
import UserDetailsAction from "Redux/V1/Users/First/UserFirstAction";
import UserService from "Services/V1/UserService";

function* userDetails(data) {
	try {
		const response = yield UserService.get(data.request);
		if (response.success) {
			yield put(UserDetailsAction.userDetailSuccess(response.data));
		} else {
			yield put(
				UserDetailsAction.userDetailFailed(response.error.message)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* userFirstSaga() {
	yield takeEvery(USER_DETAILS.USER_DETAILS_GET, userDetails);
}
