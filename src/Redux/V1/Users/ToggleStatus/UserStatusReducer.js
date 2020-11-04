import USER from "Redux/V1/Users/ToggleStatus/UserStatusActionType";

const UserStatusReducer = (
	state = {
		loading: false,
		success: false,
		user_status: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case USER.USER_STATUS:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case USER.USER_STATUS_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				user_status: action.response.user_status,
			};
		case USER.USER_STATUS_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default UserStatusReducer;
