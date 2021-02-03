import { takeEvery, put } from "redux-saga/effects";
import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";
import RedisToggleAction from "Redux/V1/Sites/Features/Operations/Redis/RedisToggle/RedisToggleAction";
import OperationService from "Services/V1/OperationService";
import ToastHelper from "Helpers/ToastHelper";
import RedisDetailAction from "Redux/V1/Sites/Features/Operations/Redis/First/RedisFirstAction";

function* redisToggleStatus(data) {
    try {
        const response = yield OperationService.redisToggleStatus(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(
                RedisToggleAction.redisToggleStatusSuccess(response.data)
            );
            yield put(RedisDetailAction.redisFirst(data.request.identity));
        } else {
            ToastHelper.error(response.error.message);
            yield put(
                RedisToggleAction.redisToggleStatusFailed(response.error)
            );
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* RedisToggleStatusSaga() {
    yield takeEvery(OPERATION.REDIS_TOGGLE, redisToggleStatus);
}
