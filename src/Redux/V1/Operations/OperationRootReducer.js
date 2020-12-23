import { combineReducers } from "redux";
import CacheClearReducer from "Redux/V1/Operations/CacheClear/Put/CachePutReducer";
import PermissionsResetReducer from "Redux/V1/Operations/PermissionReset/Get/PermissionGetReducer";

const OperationRootReducer = combineReducers({
    cacheClear: CacheClearReducer,
    permissionsReset: PermissionsResetReducer,
});
export default OperationRootReducer;
