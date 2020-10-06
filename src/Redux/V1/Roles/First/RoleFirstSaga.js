import { takeEvery, put } from "redux-saga/effects";
import ROLE_DETAILS from "Redux/V1/Roles/First/RoleFirstActionType";
import RoleDetailsAction from "Redux/V1/Roles/First/RoleFirstAction";
import RoleService from "Services/V1/RoleService";

function* roleDetails(data) {
	try {
		const response = yield RoleService.get(data.request);
		if (response.success) {
			yield put(RoleDetailsAction.roleDetailSuccess(response.data));
		} else {
			yield put(
				RoleDetailsAction.roleDetailFailed(response.error.message)
			);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* roleFirstSaga() {
	yield takeEvery(ROLE_DETAILS.ROLE_DETAILS_GET, roleDetails);
}
