import { takeEvery, put } from "redux-saga/effects";
import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";
import RedisDetailAction from "Redux/V1/Sites/Features/Operations/Redis/First/RedisFirstAction";
import OperationService from "Services/V1/OperationService";

function* redisDetails(data) {
    console.log(data, "ywh h dataa");
    try {
        const response = yield OperationService.redisFirst(data.request);
        if (response.success) {
            yield put(RedisDetailAction.redisFirstSuccess(response.data));
        } else {
            yield put();
            RedisDetailAction.redisFirstFailed(response.error.message);
        }
    } catch (error) {
        console.log(error);
    }
}

export function* RedisDetailSaga() {
    yield takeEvery(OPERATION.REDIS_FIRST, redisDetails);
}
