import ROLE from "Redux/V1/Roles/Delete/RoleDeleteActionType";

const RoleDeleteReducer = (
	state = {
		loading: false,
		success: false,
		role_delete: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case ROLE.ROLE_DELETE:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case ROLE.ROLE_DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				role_delete: action.response,
			};
		case ROLE.ROLE_DELETE_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default RoleDeleteReducer;
