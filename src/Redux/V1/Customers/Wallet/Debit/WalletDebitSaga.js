import { takeEvery, put } from "redux-saga/effects";
import WALLET from "Redux/V1/Customers/Wallet/ActionType";
import WalletDebitAction from "Redux/V1/Customers/Wallet/Debit/WalletDebitAction";
import CustomerFirstActionV3 from "Redux/V3/Customers/First/CustomerFirstActionV3";
import WalletService from "Services/V1/WalletService";
import ToastHelper from "Helpers/ToastHelper";

function* walletDebit(data) {
    try {
        const response = yield WalletService.walletDebit(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(WalletDebitAction.walletDebitSuccess(response.data));
            yield put(
                CustomerFirstActionV3.customerFirst(data.request.customer_id)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(WalletDebitAction.walletDebitFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* WalletDebitSaga() {
    yield takeEvery(WALLET.WALLET_DEBIT, walletDebit);
}
