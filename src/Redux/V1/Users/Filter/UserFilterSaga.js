import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/Filter/UserFilterActionType";
import UsersAction from "Redux/V1/Users/Filter/UserFilterAction";
import UserService from "Services/V1/UserService";

function* userFilter(data) {
	try {
		const response = yield UserService.filter(data.request);
		if (response.success) {
			yield put(UsersAction.filterUsersSuccess(response.data));
		} else {
			yield put(UsersAction.filterUsersFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* UserFilterSaga() {
	yield takeEvery(USER.USERS_FILTER, userFilter);
}
