import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/WordpressLogs/ActionType";
import WorpdressLogsListAction from "Redux/V1/WordpressLogs/Logs/WordpressLogsAction";
import WordpressLogService from "Services/V1/WordpressLogService";
import ToastHelper from "Helpers/ToastHelper";

function* wordpressLogs(data) {
    try {
        const response = yield WordpressLogService.wordpressLogs(data.request);
        if (response.success) {
            yield put(
                WorpdressLogsListAction.wordpressLogsSuccess(response.data)
            );
        } else {
            yield put(
                WorpdressLogsListAction.wordpressLogsFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* WorpdressLogsListSaga() {
    yield takeEvery(WORDPRESS.WP_LOGS, wordpressLogs);
}
