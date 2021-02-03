import { combineReducers } from "redux";
import FeatureRootReducer from "Redux/V1/Sites/Features/FeatureRootReducer";

const SiteRootReducer = combineReducers({
    features: FeatureRootReducer,
});
export default SiteRootReducer;
