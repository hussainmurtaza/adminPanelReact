import WALLET from "Redux/V1/Customers/Wallet/ActionType";

const WalletCreditReducer = (
    state = {
        loading: false,
        success: false,
        credit: [],
    },
    action
) => {
    switch (action.type) {
        case WALLET.WALLET_CREDIT:
            return {
                ...state,
                loading: true,
                error: null,
                credit: [],
                success: false,
            };
        case WALLET.WALLET_CREDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                credit: action.response.customer_wallet,
            };
        case WALLET.WALLET_CREDIT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.response,
                credit: [],
                success: false,
            };
        default:
            return state;
    }
};
export default WalletCreditReducer;
