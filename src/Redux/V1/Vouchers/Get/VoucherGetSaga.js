import { takeEvery, put } from "redux-saga/effects";
import VOUCHER from "Redux/V1/Vouchers/ActionType";
import VoucherGetAction from "Redux/V1/Vouchers/Get/VoucherGetAction";
import VoucherService from "Services/V1/VoucherService";

function* voucherGet(data) {
    try {
        const response = yield VoucherService.voucherGet(data.request);
        if (response.success) {
            yield put(VoucherGetAction.voucherGetSuccess(response.data));
        } else {
            yield put(VoucherGetAction.voucherGetFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* VoucherGetSaga() {
    yield takeEvery(VOUCHER.VOUCHER_GET, voucherGet);
}
