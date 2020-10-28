import USER from "Redux/V1/Users/Get/UserGetActionType";

const UserDetails = (
	state = {
		loading: false,
		users: [],
	},
	action
) => {
	switch (action.type) {
		case USER.USERS_GET:
			return {
				...state,
				loading: true,
				error: null,
			};
		case USER.USERS_GET_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.response.users,
			};
		case USER.USERS_GET_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default UserDetails;
