import { takeEvery, put } from "redux-saga/effects";
import CUSTOMER from "Redux/V1/Customers/CustomerSite/CustomerSiteActionType";
import CustomerSiteAction from "Redux/V1/Customers/CustomerSite/CustomerSiteAction";
import CustomerService from "Services/V1/CustomerService";

function* customerSite(data) {
    try {
        const response = yield CustomerService.customerSite(data.request);
        if (response.success) {
            yield put(CustomerSiteAction.customerSiteSuccess(response.data));
        } else {
            yield put(
                CustomerSiteAction.customerSiteFailed(response.error.message)
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* CustomerSiteSaga() {
    yield takeEvery(CUSTOMER.CUSTOMER_SITE, customerSite);
}
