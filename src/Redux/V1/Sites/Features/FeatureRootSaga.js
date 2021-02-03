import { all } from "redux-saga/effects";
import OperationRootSaga from "Redux/V1/Sites/Features/Operations/OperationRootSaga";

export default function* FeatureRootSaga() {
    yield all([OperationRootSaga()]);
}
