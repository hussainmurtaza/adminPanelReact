import { takeEvery, put } from "redux-saga/effects";
import ROLE from "Redux/V1/Roles/Put/RolePutActionType";
import RolesPutAction from "Redux/V1/Roles/Put/RolePutAction";
import RoleService from "Services/V1/RoleService";
import ToastHelper from "Helpers/ToastHelper";

function* rolePut(data) {
	try {
		const response = yield RoleService.put(
			data.request.form,
			data.request.id
		);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(RolesPutAction.rolePutSuccess(response.data));
		} else {
			ToastHelper.error(response.error.message);
			yield put(RolesPutAction.rolePutFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* rolePutSaga() {
	yield takeEvery(ROLE.ROLE_PUT, rolePut);
}
