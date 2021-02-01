import { all } from "redux-saga/effects";
import { VoucherGetSaga } from "Redux/V1/Vouchers/Get/VoucherGetSaga";
import { VoucherFirstSaga } from "Redux/V1/Vouchers/First/VoucherFirstSaga";
import { VoucherDeleteSaga } from "Redux/V1/Vouchers/Delete/VoucherDeleteSaga";
import { VoucherPostSaga } from "Redux/V1/Vouchers/Post/VoucherPostSaga";
import { VoucherPutSaga } from "Redux/V1/Vouchers/Put/VoucherPutSaga";

export default function* VoucherRootSaga() {
    yield all([
        VoucherGetSaga(),
        VoucherFirstSaga(),
        VoucherDeleteSaga(),
        VoucherPostSaga(),
        VoucherPutSaga(),
    ]);
}
