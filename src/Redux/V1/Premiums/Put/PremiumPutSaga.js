import { takeEvery, put } from "redux-saga/effects";
import PREMIUM from "Redux/V1/Premiums/ActionType";
import PremiumUpdateAction from "Redux/V1/Premiums/Put/PremiumPutAction";
import PremiumService from "Services/V1/PremiumService";
import ToastHelper from "Helpers/ToastHelper";

function* premiumPut(data) {
    try {
        const response = yield PremiumService.premiumPut(
            data.request,
            data.request.id
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PremiumUpdateAction.premiumPutSuccess(response.data));
            // setTimeout(function () {
            //     window.location.href = "/vouchers";
            // }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(PremiumUpdateAction.premiumPutFailed(response.error));
        }
    } catch (error) {
        console.log(error);
        ToastHelper.error();
    }
}

export function* PremiumUpdateSaga() {
    yield takeEvery(PREMIUM.PREMIUM_PUT, premiumPut);
}
