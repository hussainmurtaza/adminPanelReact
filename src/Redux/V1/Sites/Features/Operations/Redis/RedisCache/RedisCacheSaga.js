import { takeEvery, put } from "redux-saga/effects";
import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";
import RedisCacheAction from "Redux/V1/Sites/Features/Operations/Redis/RedisCache/RedisCacheAction";
import OperationService from "Services/V1/OperationService";
import ToastHelper from "Helpers/ToastHelper";

function* redisCache(data) {
    try {
        const response = yield OperationService.redisCache(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(RedisCacheAction.redisCacheSuccess(response.data));
        } else {
            ToastHelper.error(response.error.message);
            yield put(RedisCacheAction.redisCacheFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* RedisCacheSaga() {
    yield takeEvery(OPERATION.REDIS_CACHE, redisCache);
}
