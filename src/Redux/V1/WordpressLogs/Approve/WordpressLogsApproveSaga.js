import { takeEvery, put } from "redux-saga/effects";
import WORDPRESS from "Redux/V1/WordpressLogs/ActionType";
import WordpressLogsApproveAction from "Redux/V1/WordpressLogs/Approve/WordpressLogsApproveAction";
import WordpressLogService from "Services/V1/WordpressLogService";
import ToastHelper from "Helpers/ToastHelper";
import WorpdressLogsListAction from "Redux/V1/WordpressLogs/Logs/WordpressLogsAction";

function* WpApproveSaga(data) {
    try {
        const response = yield WordpressLogService.wordpressLogsApprove(
            data.request
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                WordpressLogsApproveAction.wordpressLogsApproveSuccess(
                    response.data
                )
            );
            yield put(WorpdressLogsListAction.wordpressLogs());
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                WordpressLogsApproveAction.wordpressLogsApproveFailed(
                    response.error
                )
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* WordpressLogsApproveSaga() {
    yield takeEvery(WORDPRESS.WP_LOGS_APPROVE, WpApproveSaga);
}
