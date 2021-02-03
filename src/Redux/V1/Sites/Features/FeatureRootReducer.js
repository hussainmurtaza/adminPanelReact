import { combineReducers } from "redux";
import OpearationRootReducer from "Redux/V1/Sites/Features/Operations/OperationRootReducer";

const FeatureRootReducer = combineReducers({
    operations: OpearationRootReducer,
});
export default FeatureRootReducer;
