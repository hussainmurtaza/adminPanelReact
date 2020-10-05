import USER from "Redux/V1/Users/Delete/UserDeleteActionType";

const UserDeleteReducer = (
	state = {
		loading: false,
		success: false,
		user_delete: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case USER.USER_DELETE:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case USER.USER_DELETE_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				user_delete: action.response,
			};
		case USER.USER_DELETE_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default UserDeleteReducer;
