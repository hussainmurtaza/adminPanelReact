import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/Sites/Wordpress/Refresh/WordpressGetActionType";
import WordpressRefreshAction from "Redux/V1/Sites/Wordpress/Refresh/WordpressGetAction";
import WordpressService from "Services/V1/WordpressService";
import ToastHelper from "Helpers/ToastHelper";
import WordpressAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";

function* wordpressRefresh(data) {
	try {
		ToastHelper.info();
		const response = yield WordpressService.refresh(data.request);
		if (response.success) {
			ToastHelper.success(response.message);
			yield put(
				WordpressRefreshAction.getWordpressSuccess(response.data)
			);
			yield put(WordpressAction.getWordpressSuccess(response.data));
		} else {
			yield put(WordpressRefreshAction.geWordpressFailed(response.error));
		}
	} catch (error) {
		console.log(error);
		ToastHelper.error();
	}
}

export function* WordpressRefreshSaga() {
	yield takeEvery(WORDPRESS.WORDPRESS_REFRESH, wordpressRefresh);
}
