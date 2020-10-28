import { takeEvery, put } from "redux-saga/effects";
import ROLE from "Redux/V1/Roles/Delete/RoleDeleteActionType";
import RoleDeleteAction from "Redux/V1/Roles/Delete/RoleDeleteAction";
import RoleGetAction from "Redux/V1/Roles/Get/RoleGetAction";
import RoleService from "Services/V1/RoleService";
import ToastHelper from "Helpers/ToastHelper";

function* roleDELETE(data) {
	try {
		const response = yield RoleService.roleDelete(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(RoleDeleteAction.deleteRoleSuccess(response.data));
			yield put(RoleGetAction.getRoles());
		} else {
			ToastHelper.error(response.error.message);
			yield put(RoleDeleteAction.deleteRoleFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* roleDeleteSaga() {
	yield takeEvery(ROLE.ROLE_DELETE, roleDELETE);
}
