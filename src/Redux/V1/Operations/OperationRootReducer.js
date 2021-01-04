import { combineReducers } from "redux";
import CacheClearReducer from "Redux/V1/Operations/CacheClear/Put/CachePutReducer";
import PermissionsResetReducer from "Redux/V1/Operations/PermissionReset/Get/PermissionGetReducer";
import BotBlockReducer from "Redux/V1/Operations/BotBlock/Put/BotPutReducer";

const OperationRootReducer = combineReducers({
    cacheClear: CacheClearReducer,
    permissionsReset: PermissionsResetReducer,
    botBlock: BotBlockReducer,
});
export default OperationRootReducer;
