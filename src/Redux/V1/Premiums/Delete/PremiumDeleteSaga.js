import { takeEvery, put } from "redux-saga/effects";
import PREMIUM from "Redux/V1/Premiums/ActionType";
import PremiumDeleteAction from "Redux/V1/Premiums/Delete/PremiumDeleteAction";
import PremiumService from "Services/V1/PremiumService";
import ToastHelper from "Helpers/ToastHelper";
import PremiumListAction from "Redux/V1/Premiums/Get/PremiumGetAction";

function* premiumDelete(data) {
    try {
        const response = yield PremiumService.premiumDelete(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(PremiumDeleteAction.premiumDeleteSuccess(response.data));
            yield put(PremiumListAction.premiumGet());
        } else {
            ToastHelper.error(response.error.message);
            yield put(PremiumDeleteAction.premiumDeleteFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* PremiumDeleteSaga() {
    yield takeEvery(PREMIUM.PREMIUM_DELETE, premiumDelete);
}
