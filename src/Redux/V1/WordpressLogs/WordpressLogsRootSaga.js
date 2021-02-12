import { all } from "redux-saga/effects";
import { WorpdressLogsListSaga } from "Redux/V1/WordpressLogs/Logs/WordpressLogsSaga";
import { WordpressLogsApproveSaga } from "Redux/V1/WordpressLogs/Approve/WordpressLogsApproveSaga";

export default function* WordpressLogsRootSaga() {
    yield all([WorpdressLogsListSaga(), WordpressLogsApproveSaga()]);
}
