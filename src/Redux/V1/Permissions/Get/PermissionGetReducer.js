import PERMISSION from "Redux/V1/Permissions/Get/PermissionGetActionType";

const PermissionDetails = (
    state = {
        loading: false,
        permissions: [],
    },
    action
) => {
    switch (action.type) {
        case PERMISSION.PERMISSION_GET:
            return {
                ...state,
                loading: true,
            };
        case PERMISSION.PERMISSION_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                permissions: action.response.collections,
            };
        case PERMISSION.PERMISSION_GET_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default PermissionDetails;
