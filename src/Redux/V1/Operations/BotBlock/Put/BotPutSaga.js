import { takeEvery, put } from "redux-saga/effects";
import OPERATION from "Redux/V1/Operations/ActionType";
import BotBlockAction from "Redux/V1/Operations/BotBlock/Put/BotPutAction";
import SiteFirstAction from "Redux/V1/Sites/Details/First/SiteFirstAction";
import OperationService from "Services/V1/OperationService";
import ToastHelper from "Helpers/ToastHelper";

function* botPut(data) {
    try {
        ToastHelper.info();
        const response = yield OperationService.botPut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(BotBlockAction.botPutSuccess(response.data));
            yield put(SiteFirstAction.siteFirst(data.request.host));
        } else {
            ToastHelper.error(response.error.message);
            yield put(BotBlockAction.botPutFailed(response.error.message));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* botPutSaga() {
    yield takeEvery(OPERATION.BOT_PUT, botPut);
}
