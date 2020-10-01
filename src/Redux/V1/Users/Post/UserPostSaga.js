import { takeEvery, put } from "redux-saga/effects";
import USER from "Redux/V1/Users/Post/UserPostActionType";
import UsersAction from "Redux/V1/Users/Post/UserPostAction";
import UserService from "Services/V1/UserService";

function* userPOST(data) {
	console.log(data, "from saga");
	// try {
	// 	const response = yield UserService.post();
	// 	if (response.success) {
	// 		yield put(UsersAction.postUsersSuccess(response.data));
	// 	} else {
	// 		yield put(UsersAction.postUsersFailed(response.error));
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }
}

export function* UserPostSaga() {
	yield takeEvery(USER.USERS_POST, userPOST);
}
