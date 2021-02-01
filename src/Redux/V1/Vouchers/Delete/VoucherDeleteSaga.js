import { takeEvery, put } from "redux-saga/effects";
import VOUCHER from "Redux/V1/Vouchers/ActionType";
import VoucherDeleteAction from "Redux/V1/Vouchers/Delete/VoucherDeleteAction";
import VoucherService from "Services/V1/VoucherService";
import ToastHelper from "Helpers/ToastHelper";
import VoucherGetAction from "Redux/V1/Vouchers/Get/VoucherGetAction";

function* voucherDelete(data) {
    try {
        const response = yield VoucherService.voucherDelete(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(VoucherDeleteAction.voucherDeleteSuccess(response.data));
            yield put(VoucherGetAction.voucherGet());
        } else {
            ToastHelper.error(response.error.message);
            yield put(VoucherDeleteAction.voucherDeleteFailed(response.error));
        }
    } catch (error) {
        ToastHelper.error();
    }
}

export function* VoucherDeleteSaga() {
    yield takeEvery(VOUCHER.VOUCHER_DELETE, voucherDelete);
}
