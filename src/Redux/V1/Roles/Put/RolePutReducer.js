import ROLE from "Redux/V1/Roles/Put/RolePutActionType";

const RolePutReducer = (
	state = {
		loading: false,
		success: false,
		roles: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case ROLE.ROLE_PUT:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case ROLE.ROLE_PUT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				roles: action.response.roles,
			};
		case ROLE.ROLE_PUT_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default RolePutReducer;
