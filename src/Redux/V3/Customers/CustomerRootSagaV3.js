import { all } from "redux-saga/effects";
import { CustomerFirstSagaV3 } from "Redux/V3/Customers/First/CustomerFirstSagaV3";

export default function* CustomerRootSagaV3() {
    yield all([CustomerFirstSagaV3()]);
}
