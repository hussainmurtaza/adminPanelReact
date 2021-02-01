import { takeEvery, put } from "redux-saga/effects";
import VOUCHER from "Redux/V1/Vouchers/ActionType";
import VoucherPostAction from "Redux/V1/Vouchers/Post/VoucherPostAction";
import VoucherService from "Services/V1/VoucherService";
import ToastHelper from "Helpers/ToastHelper";

function* voucherPost(data) {
    try {
        const response = yield VoucherService.voucherPost(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(VoucherPostAction.voucherPostSuccess(response.data));
            setTimeout(function () {
                window.location.href = "/vouchers";
            }, 1000);
        } else {
            ToastHelper.error(response.error.message);
            yield put(VoucherPostAction.voucherPostFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* VoucherPostSaga() {
    yield takeEvery(VOUCHER.VOUCHER_POST, voucherPost);
}
