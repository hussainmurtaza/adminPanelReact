import USER from "Redux/V1/Users/Search/UserSearchActionType";

const UsersDetails = (
	state = {
		loading: false,
		success: false,
		users: [],
	},
	action
) => {
	switch (action.type) {
		case USER.USERS_SEARCH:
			return {
				...state,
				loading: true,
				error: null,
			};
		case USER.USERS_SEARCH_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.response.users,
			};
		case USER.USERS_SEARCH_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default UsersDetails;
