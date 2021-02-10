import { combineReducers } from "redux";
import WalletCreditReducer from "Redux/V1/Customers/Wallet/Credit/WalletCreditReducer";
import WalletDebitReducer from "Redux/V1/Customers/Wallet/Debit/WalletDebitReducer";

const WalletRootReducer = combineReducers({
    credit: WalletCreditReducer,
    debit: WalletDebitReducer,
});
export default WalletRootReducer;
