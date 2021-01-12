import { takeEvery, put } from "redux-saga/effects";
import AFFILIATE from "Redux/V1/Customers/AffiliateAssign/ActionType";
import AffiliateChangeAction from "Redux/V1/Customers/AffiliateAssign/AffiliatePutAction";
import CustomerFirstAction from "Redux/V1/Customers/First/CustomerFirstAction";
import AffiliateService from "Services/V1/AffiliateService";
import ToastHelper from "Helpers/ToastHelper";

function* affiliatePut(data) {
    try {
        console.log(data);
        const response = yield AffiliateService.affiliatePut(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(AffiliateChangeAction.affiliatePutSuccess(response.data));
            yield put(
                CustomerFirstAction.customerFirst(data.request.customer_id)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(AffiliateChangeAction.affiliatePutFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* AffiliateChangeSaga() {
    yield takeEvery(AFFILIATE.AFFILIATE_PUT, affiliatePut);
}
