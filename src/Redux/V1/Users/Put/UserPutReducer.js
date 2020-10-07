import USER from "Redux/V1/Users/Put/UserPutActionType";

const UserPutReducer = (
	state = {
		loading: false,
		success: false,
		users: {},
		err_mess: "",
	},
	action
) => {
	switch (action.type) {
		case USER.USERS_PUT:
			return {
				...state,
				loading: true,
				err_mess: null,
			};
		case USER.USERS_PUT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				users: action.response.users,
			};
		case USER.USERS_PUT_FAILED:
			return { ...state, loading: false, err_mess: action.response };
		default:
			return state;
	}
};

export default UserPutReducer;
