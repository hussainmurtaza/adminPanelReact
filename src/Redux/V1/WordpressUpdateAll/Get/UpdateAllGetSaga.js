import { takeEvery, put } from "redux-saga/effects";
import UPDATEALL from "Redux/V1/WordpressUpdateAll/ActionType";
import UpdateAllGetAction from "Redux/V1/WordpressUpdateAll/Get/UpdateAllGetAction";
import WordpressUpdateService from "Services/V1/WordpressUpdateService";

function* UpdateAllGet(data) {
    try {
        const response = yield WordpressUpdateService.wordpressUpdateGet(
            data.request
        );
        if (response.success) {
            yield put(UpdateAllGetAction.UpdateAllGetSuccess(response.data));
        } else {
            yield put(UpdateAllGetAction.UpdateAllGetFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* UpdateAllGetSaga() {
    yield takeEvery(UPDATEALL.UPDATEALL_GET, UpdateAllGet);
}
