import { takeEvery, put } from "redux-saga/effects";
import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";
import RedisDeleteAction from "Redux/V1/Sites/Features/Operations/Redis/RedisDelete/RedisDeleteAction";
import OperationService from "Services/V1/OperationService";
import ToastHelper from "Helpers/ToastHelper";
import RedisDetailAction from "Redux/V1/Sites/Features/Operations/Redis/First/RedisFirstAction";

function* redisDelete(data) {
    try {
        const response = yield OperationService.redisDelete(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(RedisDeleteAction.redisDeleteSuccess(response.data));
            yield put(RedisDetailAction.redisFirst(data.request));
        } else {
            ToastHelper.error(response.error.message);
            yield put(RedisDeleteAction.redisDeleteFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* RedisDeleteSaga() {
    yield takeEvery(OPERATION.REDIS_DELETE, redisDelete);
}
