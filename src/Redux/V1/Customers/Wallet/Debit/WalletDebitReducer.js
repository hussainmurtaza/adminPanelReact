import WALLET from "Redux/V1/Customers/Wallet/ActionType";

const WalletDebitReducer = (
    state = {
        loading: false,
        success: false,
        debit: [],
    },
    action
) => {
    switch (action.type) {
        case WALLET.WALLET_DEBIT:
            return {
                ...state,
                loading: true,
                error: null,
                debit: [],
            };
        case WALLET.WALLET_DEBIT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                debit: action.response.customer_wallet,
            };
        case WALLET.WALLET_DEBIT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.response,
                debit: [],
            };
        default:
            return state;
    }
};
export default WalletDebitReducer;
