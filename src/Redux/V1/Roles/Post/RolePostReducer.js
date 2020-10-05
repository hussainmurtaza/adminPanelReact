import ROLE from "Redux/V1/Roles/Post/RolePostActionType";

const PostRole = (
	state = {
		loading: false,
		success: false,
		roles: [],
	},
	action
) => {
	switch (action.type) {
		case ROLE.ROLES_POST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case ROLE.ROLES_POST_SUCCESS:
			return {
				...state,
				loading: false,
				roles: action.response.roles,
				success: true,
			};
		case ROLE.ROLES_POST_FAILED:
			return { ...state, loading: false, error: action.response };
		default:
			return state;
	}
};
export default PostRole;
