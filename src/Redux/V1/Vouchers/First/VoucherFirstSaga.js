import { takeEvery, put } from "redux-saga/effects";
import VOUCHER from "Redux/V1/Vouchers/ActionType";
import VoucherFirstAction from "Redux/V1/Vouchers/First/VoucherFirstAction";
import VoucherService from "Services/V1/VoucherService";

function* voucherFirst(data) {
    try {
        const response = yield VoucherService.voucherFirst(data.request);
        if (response.success) {
            yield put(VoucherFirstAction.voucherFirstSuccess(response.data));
        } else {
            yield put(VoucherFirstAction.voucherFirstFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* VoucherFirstSaga() {
    yield takeEvery(VOUCHER.VOUCHER_FIRST, voucherFirst);
}
