import WALLET from "Redux/V1/Customers/Wallet/ActionType";

const walletCredit = (data) => {
    return {
        type: WALLET.WALLET_CREDIT,
        request: data,
    };
};
const walletCreditSuccess = (data) => {
    return {
        type: WALLET.WALLET_CREDIT_SUCCESS,
        response: data,
    };
};
const walletCreditFailed = (data) => {
    return {
        type: WALLET.WALLET_CREDIT_FAILED,
        response: data,
    };
};

const WalletCreditAction = {
    walletCredit,
    walletCreditSuccess,
    walletCreditFailed,
};
export default WalletCreditAction;
