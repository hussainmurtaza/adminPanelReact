import OPERATION from "Redux/V1/Operations/ActionType";

const PermissionsResetReducer = (
    state = {
        loading: false,
        success: false,
        permissions_reset: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case OPERATION.PERMISSIONS_GET:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case OPERATION.PERMISSIONS_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                permissions_reset: action.response,
            };
        case OPERATION.PERMISSIONS_GET_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default PermissionsResetReducer;
