import ROLE_DETAILS from "Redux/V1/Roles/First/RoleFirstActionType";

const roleDetails = (
	state = {
		loading: false,
		role: {},
		err_mess: null,
	},
	action
) => {
	switch (action.type) {
		case ROLE_DETAILS.ROLE_DETAILS_GET:
			return {
				...state,
				loading: true,
			};
		case ROLE_DETAILS.ROLE_DETAILS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				role: action.response.role,
			};
		case ROLE_DETAILS.ROLE_DETAILS_GET_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default roleDetails;
