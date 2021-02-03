import { all } from "redux-saga/effects";
import { RedisDetailSaga } from "Redux/V1/Sites/Features/Operations/Redis/First/RedisFirstSaga";
import { RedisToggleStatusSaga } from "Redux/V1/Sites/Features/Operations/Redis/RedisToggle/RedisToggleSaga";
import { RedisDeleteSaga } from "Redux/V1/Sites/Features/Operations/Redis/RedisDelete/RedisDeleteSaga";

export default function* OperationRootSaga() {
    yield all([RedisDetailSaga(), RedisToggleStatusSaga(), RedisDeleteSaga()]);
}
