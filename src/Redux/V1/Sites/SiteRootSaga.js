import { all } from "redux-saga/effects";
import FeatureRootSaga from "Redux/V1/Sites/Features/FeatureRootSaga";

export default function* SiteRootSaga() {
    yield all([FeatureRootSaga()]);
}
