import { all } from "redux-saga/effects";
import WalletCreditSaga from "Redux/V1/Customers/Wallet/Credit/WalletCreditSaga";
import WalletDebitSaga from "Redux/V1/Customers/Wallet/Debit/WalletDebitSaga";

export default function* WalletRootSaga() {
    yield all([WalletCreditSaga(), WalletDebitSaga()]);
}
