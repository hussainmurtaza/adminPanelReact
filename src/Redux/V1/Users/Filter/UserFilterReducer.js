import USER from "Redux/V1/Users/Filter/UserFilterActionType";

const UsersDetails = (
	state = {
		loading: false,
		success: false,
		users: [],
	},
	action
) => {
	switch (action.type) {
		case USER.USERS_FILTER:
			return {
				...state,
				loading: true,
				error: null,
			};
		case USER.USERS_FILTER_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.response.users,
			};
		case USER.USERS_FILTER_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default UsersDetails;
