import OPERATION from "Redux/V1/Operations/ActionType";

const permissionsReset = (data) => {
    return {
        type: OPERATION.PERMISSIONS_GET,
        request: data,
    };
};
const permissionsResetSuccess = (data) => {
    return {
        type: OPERATION.PERMISSIONS_GET_SUCCESS,
        response: data,
    };
};
const permissionsResetFailed = (data) => {
    return {
        type: OPERATION.PERMISSIONS_GET_FAILED,
        response: data,
    };
};
const PermissionsResetAction = {
    permissionsReset,
    permissionsResetSuccess,
    permissionsResetFailed,
};
export default PermissionsResetAction;
