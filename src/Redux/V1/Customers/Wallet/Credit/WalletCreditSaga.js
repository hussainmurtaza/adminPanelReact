import { takeEvery, put } from "redux-saga/effects";
import WALLET from "Redux/V1/Customers/Wallet/ActionType";
import WalletCreditAction from "Redux/V1/Customers/Wallet/Credit/WalletCreditAction";
import CustomerFirstActionV3 from "Redux/V3/Customers/First/CustomerFirstActionV3";
import WalletService from "Services/V1/WalletService";
import ToastHelper from "Helpers/ToastHelper";

function* walletCredit(data) {
    try {
        const response = yield WalletService.walletCredit(data.request);
        if (response.success) {
            ToastHelper.success(response.message);
            yield put(WalletCreditAction.walletCreditSuccess(response.data));
            yield put(
                CustomerFirstActionV3.customerFirst(data.request.customer_id)
            );
        } else {
            ToastHelper.error(response.error.message);
            yield put(WalletCreditAction.walletCreditFailed(response.error));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* WalletCreditSaga() {
    yield takeEvery(WALLET.WALLET_CREDIT, walletCredit);
}
