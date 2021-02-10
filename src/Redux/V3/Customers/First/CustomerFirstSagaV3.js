import { takeEvery, put } from "redux-saga/effects";
import CUSTOMER from "Redux/V3/Customers/ActionTypeV3";
import CustomerFirstActionV3 from "Redux/V3/Customers/First/CustomerFirstActionV3";
import CustomerServiceV3 from "Services/V3/CustomerServiceV3";

function* customerFirst(data) {
    try {
        const response = yield CustomerServiceV3.customerFirst(data.request);
        if (response.success) {
            yield put(
                CustomerFirstActionV3.customerFirstSuccess(response.data)
            );
        } else {
            yield put(
                CustomerFirstActionV3.customerFirstFailed(
                    response.error.message
                )
            );
        }
    } catch (error) {
        console.log(error);
    }
}

export function* CustomerFirstSagaV3() {
    yield takeEvery(CUSTOMER.CUSTOMER_FIRST_V3, customerFirst);
}
