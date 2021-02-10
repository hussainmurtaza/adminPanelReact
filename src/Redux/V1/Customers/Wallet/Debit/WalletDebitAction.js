import WALLET from "Redux/V1/Customers/Wallet/ActionType";

const walletDebit = (data) => {
    return {
        type: WALLET.WALLET_DEBIT,
        request: data,
    };
};
const walletDebitSuccess = (data) => {
    return {
        type: WALLET.WALLET_DEBIT_SUCCESS,
        response: data,
    };
};
const walletDebitFailed = (data) => {
    return {
        type: WALLET.WALLET_DEBIT_FAILED,
        response: data,
    };
};

const WalletDebitAction = {
    walletDebit,
    walletDebitSuccess,
    walletDebitFailed,
};
export default WalletDebitAction;
