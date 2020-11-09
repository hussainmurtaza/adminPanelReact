import { takeEvery, put } from "redux-saga/effects";
import ONECLICKLOGIN from "Redux/V1/Sites/OneClickLogin/OneClickLoginActionType";
import OneClickLoginAction from "Redux/V1/Sites/OneClickLogin/OneClickLoginAction";
import SiteService from "Services/V1/SiteService";
import ToastHelper from "Helpers/ToastHelper";

function* oneClickLoginGet(data) {
	try {
		ToastHelper.info();
		const response = yield SiteService.quickLogin(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(OneClickLoginAction.getOneClickLoginSuccess(response.data));
			window.open(response.data.one_click.url, "_blank");
		} else {
			yield put(OneClickLoginAction.getOneClickLoginFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* OneClickLoginGetSaga() {
	yield takeEvery(ONECLICKLOGIN.ONECLICKLOGIN_GET, oneClickLoginGet);
}
