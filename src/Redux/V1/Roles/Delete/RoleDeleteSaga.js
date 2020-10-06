import { takeEvery, put } from "redux-saga/effects";
import ROLE from "Redux/V1/Roles/Delete/RoleDeleteActionType";
import RoleDeleteAction from "Redux/V1/Roles/Delete/RoleDeleteAction";
import RoleGetAction from "Redux/V1/Roles/Get/RoleGetAction";
import RoleService from "Services/V1/RoleService";
import ToastHelper from "Helpers/ToastHelper";

function* roleDELETE(data) {
	//console.log(data, "saga delete");
	try {
		const response = yield RoleService.roleDelete(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(RoleDeleteAction.deleteRoleSuccess(response.data));
			yield put(RoleGetAction.getRoles());
			console.log("deleteRoleSuccess saga");
		} else {
			ToastHelper.error(response.error.message);
			yield put(RoleDeleteAction.deleteRoleFailed(response.error));
			console.log("deleteUserFailed saga");
		}
	} catch (error) {
		ToastHelper.error();
		console.log(error, "error saga");
	}
}

export function* roleDeleteSaga() {
	yield takeEvery(ROLE.ROLE_DELETE, roleDELETE);
}
