import { takeEvery, put } from "redux-saga/effects";
import UPDATEALL from "Redux/V1/WordpressUpdateAll/ActionType";
import UpdateAllPutAction from "Redux/V1/WordpressUpdateAll/Put/UpdateAllPutAction";
import WordpressUpdateService from "Services/V1/WordpressUpdateService";
import ToastHelper from "Helpers/ToastHelper";
// import WordpressAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";

function* UpdateAllPut(data) {
	try {
		ToastHelper.info();
		const response = yield WordpressUpdateService.wordpressUpdatePut(
			data.request
		);
		if (response.success) {
			//ToastHelper.success(response.message);
			ToastHelper.success("Wordpress Update has been queued.");
			yield put(UpdateAllPutAction.updateAllPutSuccess(data.request));
			// setTimeout(function () {
			// 	window.location.reload(true);
			// }, 1000);
		} else {
			ToastHelper.error(response.error.message);
			yield put(UpdateAllPutAction.updateAllPutFailed(response.error));
		}
	} catch (error) {
		ToastHelper.error();
	}
}

export function* UpdateAllPutSaga() {
	yield takeEvery(UPDATEALL.UPDATEALL_PUT, UpdateAllPut);
}
