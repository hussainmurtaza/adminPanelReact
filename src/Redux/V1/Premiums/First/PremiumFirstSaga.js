import { takeEvery, put } from "redux-saga/effects";
import PREMIUM from "Redux/V1/Premiums/ActionType";
import PremiumDetailAction from "Redux/V1/Premiums/First/PremiumFirstAction";
import PremiumService from "Services/V1/PremiumService";

function* premiumFirst(data) {
    try {
        const response = yield PremiumService.premiumFirst(data.request);
        if (response.success) {
            yield put(PremiumDetailAction.premiumFirstSuccess(response.data));
        } else {
            yield put(PremiumDetailAction.premiumFirstFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* PremiumDetailSaga() {
    yield takeEvery(PREMIUM.PREMIUM_FIRST, premiumFirst);
}
