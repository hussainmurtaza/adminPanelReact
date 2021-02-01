import { takeEvery, put } from "redux-saga/effects";
import PREMIUM from "Redux/V1/Premiums/ActionType";
import PremiumCreateAction from "Redux/V1/Premiums/Post/PremiumPostAction";
import PremiumService from "Services/V1/PremiumService";
import ToastHelper from "Helpers/ToastHelper";

function* premiumPost(data) {
    try {
        const response = yield PremiumService.premiumPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PremiumCreateAction.premiumPostSuccess(response.data));
            setTimeout(function () {
                window.location.href = "/plugins";
            }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(PremiumCreateAction.premiumPostFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* PremiumCreateSaga() {
    yield takeEvery(PREMIUM.PREMIUM_POST, premiumPost);
}
