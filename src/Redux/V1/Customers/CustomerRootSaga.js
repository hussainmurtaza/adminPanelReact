import { all } from "redux-saga/effects";
import { AffiliateChangeSaga } from "Redux/V1/Customers/AffiliateAssign/AffiliatePutSaga";
import { CustomerFilterSaga } from "Redux/V1/Customers/Filter/CustomerFilterSaga";
import { CustomerFirstSaga } from "Redux/V1/Customers/First/CustomerFirstSaga";
import { CustomerGetSaga } from "Redux/V1/Customers/Get/CustomerGetSaga";
import { CustomerPutSaga } from "Redux/V1/Customers/Put/CustomerPutSaga";

export default function* CustomerRootSaga() {
    yield all([
        AffiliateChangeSaga(),
        CustomerFilterSaga(),
        CustomerFirstSaga(),
        CustomerGetSaga(),
        CustomerPutSaga(),
    ]);
}
