import { takeEvery, put } from "redux-saga/effects";
import ROLE from "Redux/V1/Roles/First/RoleFirstActionType";
import RoleFirstAction from "Redux/V1/Roles/First/RoleFirstAction";
import RoleService from "Services/V1/RoleService";

function* roleDetails(data) {
	try {
		const response = yield RoleService.get(data.request);
		if (response.success) {
			yield put(RoleFirstAction.roleFirstSuccess(response.data));
		} else {
			yield put(
				RoleFirstAction.roleFirstFailed(response.error.message)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* roleFirstSaga() {
	yield takeEvery(ROLE.ROLE_FIRST, roleDetails);
}
