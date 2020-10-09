import { takeEvery, put } from "redux-saga/effects";
import LOGIN from "Redux/V1/Auth/Login/ActionType";
import LoginAction from "Redux/V1/Auth/Login/LoginPostAction";
import AuthService from "Services/V1/AuthService";
import ToastHelper from "Helpers/ToastHelper";

function* loginPost(data) {
	try {
		ToastHelper.info();
		const response = yield AuthService.loginPost(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(LoginAction.loginPostSuccess(response.data));
		} else {
			ToastHelper.error(response.error.message);
		}
	} catch (error) {
		ToastHelper.error();
	}
}

function loginPostSuccess(data) {
	localStorage.setItem(
		"admin_access_token",
		data.response.authentication.access_token
	);
	localStorage.setItem(
		"admin_user",
		JSON.stringify(data.response.authentication.user)
	);
	setTimeout(() => {
		window.location.href = "/users";
	}, 1000);
}

function loginPostFailed(data) {
	ToastHelper.error(data.response.error.message);
}

export function* loginPostSaga() {
	yield takeEvery(LOGIN.LOGIN_POST, loginPost);
}

export function* loginPostSuccessSaga() {
	yield takeEvery(LOGIN.LOGIN_POST_SUCCESS, loginPostSuccess);
}

export function* loginPostFailedSaga() {
	yield takeEvery(LOGIN.LOGIN_POST_FAILED, loginPostFailed);
}
