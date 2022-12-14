import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/Sites/Wordpress/Put/WordpressPutActionType";
import WordpressUpdateAction from "Redux/V1/Sites/Wordpress/Put/WordpressPutAction";
import WordpressAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";
import WorpdressService from "Services/V1/WordpressService";
import ToastHelper from "Helpers/ToastHelper";
// import WordpressAction from "Redux/V1/Sites/Wordpress/Get/WordpressGetAction";

function* wordpressUpdate(data) {
  try {
    ToastHelper.info();
    const response = yield WorpdressService.put(data.request);
    if (response.success) {
      ToastHelper.success(response.message);
      yield put(WordpressUpdateAction.wordpressUpdateSuccess(data.request));
      yield put(WordpressAction.getWordpress(data.request.identity));
    } else {
      ToastHelper.error(response.error.message);
      yield put(WordpressUpdateAction.wordpressUpdateFailed(response.error));
    }
  } catch (error) {
    ToastHelper.error();
  }
}

export function* wordpressUpdateSaga() {
  yield takeEvery(WORDPRESS.WORDPRESS_UPDATE_PUT, wordpressUpdate);
}
