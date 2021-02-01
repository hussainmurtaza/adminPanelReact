import { all } from "redux-saga/effects";
import { PremiumListSaga } from "Redux/V1/Premiums/Get/PremiumGetSaga";
import { PremiumDeleteSaga } from "Redux/V1/Premiums/Delete/PremiumDeleteSaga";
import { PremiumDetailSaga } from "Redux/V1/Premiums/First/PremiumFirstSaga";
import { PremiumCreateSaga } from "Redux/V1/Premiums/Post/PremiumPostSaga";
import { PremiumUpdateSaga } from "Redux/V1/Premiums/Put/PremiumPutSaga";

export default function* PremiumRootSaga() {
    yield all([
        PremiumListSaga(),
        PremiumDeleteSaga(),
        PremiumDetailSaga(),
        PremiumCreateSaga(),
        PremiumUpdateSaga(),
    ]);
}
