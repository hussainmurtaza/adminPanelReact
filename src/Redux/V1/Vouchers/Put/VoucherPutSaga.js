import { takeEvery, put } from "redux-saga/effects";
import VOUCHER from "Redux/V1/Vouchers/ActionType";
import VoucherPutAction from "Redux/V1/Vouchers/Put/VoucherPutAction";
import VoucherService from "Services/V1/VoucherService";
import ToastHelper from "Helpers/ToastHelper";

function* voucherPut(data) {
    try {
        const response = yield VoucherService.voucherPut(
            data.request,
            data.request.id
        );
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(VoucherPutAction.voucherPutSuccess(response.data));
            // setTimeout(function () {
            //     window.location.href = "/vouchers";
            // }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(VoucherPutAction.voucherPutFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* VoucherPutSaga() {
    yield takeEvery(VOUCHER.VOUCHER_PUT, voucherPut);
}
