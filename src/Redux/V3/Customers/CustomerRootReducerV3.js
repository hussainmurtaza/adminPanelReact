import { combineReducers } from "redux";
import CustomerFirstReducerV3 from "Redux/V3/Customers/First/CustomerFirstReducerV3";

const CustomerRootReducerV3 = combineReducers({
    first: CustomerFirstReducerV3,
});
export default CustomerRootReducerV3;
