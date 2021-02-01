import { takeEvery, put } from "redux-saga/effects";
import PREMIUM from "Redux/V1/Premiums/ActionType";
import PremiumListAction from "Redux/V1/Premiums/Get/PremiumGetAction";
import PremiumService from "Services/V1/PremiumService";

function* premiumGet() {
    try {
        const response = yield PremiumService.premiumGet();
        if (response.success) {
            yield put(PremiumListAction.premiumGetSuccess(response.data));
        } else {
            yield put(PremiumListAction.premiumGetFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* PremiumListSaga() {
    yield takeEvery(PREMIUM.PREMIUM_GET, premiumGet);
}
