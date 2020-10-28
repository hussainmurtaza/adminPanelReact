import ROLE from "Redux/V1/Roles/First/RoleFirstActionType";

const roleDetails = (
	state = {
		loading: false,
		role: {
			name: null,
			permissions: [],
		},
		err_mess: null,
		fetched: false,
	},
	action
) => {
	switch (action.type) {
		case ROLE.ROLE_FIRST:
			return {
				...state,
				loading: true,
				fetched: false,
			};
		case ROLE.ROLE_FIRST_SUCCESS:
			return {
				...state,
				loading: false,
				role: action.response.role,
				fetched: true,
			};
		case ROLE.ROLE_FIRST_FAILED:
			return {
				...state,
				loading: false,
				err_mess: action.response,
				fetched: true,
			};
		default:
			return state;
	}
};

export default roleDetails;
