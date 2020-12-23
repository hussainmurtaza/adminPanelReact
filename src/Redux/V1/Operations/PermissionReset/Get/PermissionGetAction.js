import OPERATION from "Redux/V1/Operations/ActionType";

const permissionsReset = (data) => {
    return {
        type: OPERATION.PERMISSIONS_RESET,
        request: data,
    };
};
const permissionsResetSuccess = (data) => {
    return {
        type: OPERATION.PERMISSIONS_RESET_SUCCESS,
        response: data,
    };
};
const permissionsResetFailed = (data) => {
    return {
        type: OPERATION.PERMISSIONS_RESET_FAILED,
        response: data,
    };
};
const PermissionsResetAction = {
    permissionsReset,
    permissionsResetSuccess,
    permissionsResetFailed,
};
export default PermissionsResetAction;
