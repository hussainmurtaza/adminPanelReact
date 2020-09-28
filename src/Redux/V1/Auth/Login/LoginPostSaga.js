import { takeEvery, put } from "redux-saga/effects";
import LOGIN from "Redux/V1/Auth/Login/ActionType";
import LoginAction from "Redux/V1/Auth/Login/LoginPostAction";
import AuthService from "Services/V1/AuthService";
import ToastHelper from "Helpers/ToastHelper";

function* loginPost(data) {
    try {
        ToastHelper.info();
        const response = yield AuthService.userLogin(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(LoginAction.postLoginSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
        }
    } catch (error) {
        ToastHelper.error();
    }
}

function loginPostSuccess(data) {
    localStorage.setItem(
        "access_token",
        data.response.authentication.access_token
    );
    localStorage.setItem(
        "user",
        JSON.stringify(data.response.authentication.user)
    );
    window.location.href = "/dashboard";
}

function loginPostFailed(data) {
    ToastHelper.error(data.response);
}

export function* loginPostSaga() {
    yield takeEvery(LOGIN.LOGIN_POST, loginPost);
}

export function* postLoginSuccessSaga() {
    yield takeEvery(LOGIN.LOGIN_POST_SUCCESS, loginPostSuccess);
}

export function* postLoginFailedSaga() {
    yield takeEvery(LOGIN.LOGIN_POST_FAILED, loginPostFailed);
}
