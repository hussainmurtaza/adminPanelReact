import { takeEvery, put } from "redux-saga/effects";
import ROLE from "Redux/V1/Roles/Post/RolePostActionType";
import PostRolesAction from "Redux/V1/Roles/Post/RolePostAction";
import RoleService from "Services/V1/RoleService";
import ToastHelper from "Helpers/ToastHelper";

function* rolePOST(data) {
	try {
		const response = yield RoleService.post(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(PostRolesAction.postRolesSuccess(response.data));
			setTimeout(function () {
				window.location.href = "/all-roles";
			}, 1000);
		} else {
			ToastHelper.error(response.error.message);
			yield put(PostRolesAction.postRolesFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* RolePostSaga() {
	yield takeEvery(ROLE.ROLES_POST, rolePOST);
}
