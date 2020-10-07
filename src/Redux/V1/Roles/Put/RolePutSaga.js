import { takeEvery, put } from "redux-saga/effects";
import ROLE from "Redux/V1/Roles/Put/RolePutActionType";
import RolesAction from "Redux/V1/Roles/Put/RolePutAction";
import RoleService from "Services/V1/RoleService";

function* rolePut(data) {
	try {
		const response = yield RoleService.put(
			data.request.form,
			data.request.id
		);
		if (response.success) {
			yield put(RolesAction.rolePutSuccess(response.data));
		} else {
			yield put(RolesAction.rolePutFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* rolePutSaga() {
	yield takeEvery(ROLE.ROLE_PUT, rolePut);
}
