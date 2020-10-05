import USER from "Redux/V1/Users/Post/UserPostActionType";

const PostUser = (
	state = {
		loading: false,
		success: false,
		users: [],
	},
	action
) => {
	switch (action.type) {
		case USER.USERS_POST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case USER.USERS_POST_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.response.users,
				success: true,
			};
		case USER.USERS_POST_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default PostUser;
