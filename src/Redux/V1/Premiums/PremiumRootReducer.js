import { combineReducers } from "redux";
import PremiumListReducer from "Redux/V1/Premiums/Get/PremiumGetReducer";
import PremiumDeleteReducer from "Redux/V1/Premiums/Delete/PremiumDeleteReducer";
import PremiumDetailReducer from "Redux/V1/Premiums/First/PremiumFirstReducer";
import PremiumCreateReducer from "Redux/V1/Premiums/Post/PremiumPostReducer";
import PremiumUpdateReducer from "Redux/V1/Premiums/Put/PremiumPutReducer";

const PremiumRootReducer = combineReducers({
    list: PremiumListReducer,
    delete: PremiumDeleteReducer,
    detail: PremiumDetailReducer,
    create: PremiumCreateReducer,
    update: PremiumUpdateReducer,
});
export default PremiumRootReducer;
