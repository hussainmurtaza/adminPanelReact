import ROLE from "Redux/V1/Roles/Get/RoleGetActionType";

const RoleDetails = (
	state = {
		loading: false,
		roles: [],
	},
	action
) => {
	switch (action.type) {
		case ROLE.GET_ROLES:
			return {
				...state,
				loading: true,
			};
		case ROLE.GET_ROLES_SUCCESS:
			return {
				...state,
				loading: false,
				roles: action.response.roles,
			};
		case ROLE.GET_ROLES_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default RoleDetails;
