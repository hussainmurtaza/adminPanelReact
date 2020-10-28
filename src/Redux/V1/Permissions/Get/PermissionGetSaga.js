import { takeEvery, put } from "redux-saga/effects";
import PERMISSION from "Redux/V1/Permissions/Get/PermissionGetActionType";
import PermissionAction from "Redux/V1/Permissions/Get/PermissionGetAction";
import PermissionService from "Services/V1/PermissionService";

function* permissionGet() {
	try {
		const response = yield PermissionService.getAll();
		if (response.success) {
			yield put(PermissionAction.getPermissionSuccess(response.data));
		} else {
			yield put(PermissionAction.getPermissionFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* PermissionGetSaga() {
	yield takeEvery(PERMISSION.PERMISSION_GET, permissionGet);
}
