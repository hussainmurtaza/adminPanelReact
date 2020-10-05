import { takeEvery, put } from "redux-saga/effects";
import ROLE from "Redux/V1/Roles/Get/RoleGetActionType";
import RolesAction from "Redux/V1/Roles/Get/RoleGetAction";
import RoleService from "Services/V1/RoleService";

function* roleGet() {
	try {
		const response = yield RoleService.getAll();
		if (response.success) {
			yield put(RolesAction.getRolesSuccess(response.data));
		} else {
			yield put(RolesAction.getRolesFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* RoleGetSaga() {
	yield takeEvery(ROLE.GET_ROLES, roleGet);
}
