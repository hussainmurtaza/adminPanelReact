import ROLE from "Redux/V1/Roles/Post/RolePostActionType";

const PostRolesAction = {
	postRoles,
	postRolesSuccess,
	postRolesFailed,
};

function postRoles(data) {
	return {
		type: ROLE.ROLES_POST,
		request: data,
	};
}
function postRolesSuccess(data) {
	return {
		type: ROLE.ROLES_POST_SUCCESS,
		response: data,
	};
}
function postRolesFailed(data) {
	return {
		type: ROLE.ROLES_POST_FAILED,
		response: data,
	};
}

export default PostRolesAction;
