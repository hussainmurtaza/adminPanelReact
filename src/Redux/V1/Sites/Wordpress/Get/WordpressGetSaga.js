import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/Sites/Wordpress/Get/WordpressFirstActionType";
import WordpressAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";
import WordpressService from "Services/V1/WordpressService";

function* wordpressGet(data) {
	try {
		const response = yield WordpressService.get(data.request);
		if (response.success) {
			yield put(WordpressAction.getWordpressSuccess(response.data));
		} else {
			yield put(WordpressAction.geWordpressFailed(response.error));
		}
	} catch (error) {
		console.log(error);
	}
}

export function* WordpressGetSaga() {
	yield takeEvery(WORDPRESS.WORDPRESS_GET, wordpressGet);
}
