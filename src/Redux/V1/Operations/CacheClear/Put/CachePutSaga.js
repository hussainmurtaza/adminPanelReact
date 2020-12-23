import { takeEvery, put } from "redux-saga/effects";
import OPERATION from "Redux/V1/Operations/ActionType";
import CacheClearAction from "Redux/V1/Operations/CacheClear/Put/CachePutAction";
import OperationService from "Services/V1/OperationService";
import ToastHelper from "Helpers/ToastHelper";

function* cachePut(data) {
    try {
        ToastHelper.info();
        const response = yield OperationService.cachePut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(CacheClearAction.cachePutSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(CacheClearAction.cachePutFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* cachePutSaga() {
    yield takeEvery(OPERATION.CACHE_PUT, cachePut);
}
