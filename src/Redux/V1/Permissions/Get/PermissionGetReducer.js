import PERMISSION from "Redux/V1/Permissions/Get/PermissionGetActionType";

const PermissionDetails = (
	state = {
		loading: false,
		permissions: [],
	},
	action
) => {
	switch (action.type) {
		case PERMISSION.GET_PERMISSION:
			return {
				...state,
				loading: true,
			};
		case PERMISSION.GET_PERMISSION_SUCCESS:
			return {
				...state,
				loading: false,
				permissions: action.response.permissions,
			};
		case PERMISSION.GET_PERMISSION_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default PermissionDetails;
