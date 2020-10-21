import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/Search/UserSearchActionType";
import UserSearchAction from "Redux/V1/Users/Search/UserSearchAction";
import UserService from "Services/V1/UserService";

function* userSearch(data) {
	try {
		const response = yield UserService.search(data.request);
		if (response.success) {
			yield put(UserSearchAction.searchUsersSuccess(response.data));
		} else {
			yield put(UserSearchAction.searchUsersFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* UserSearchSaga() {
	yield takeEvery(USER.USERS_SEARCH, userSearch);
}
