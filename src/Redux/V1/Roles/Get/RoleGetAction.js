import ROLE from "Redux/V1/Roles/Get/RoleGetActionType";

const RolesAction = {
	getRoles,
	getRolesSuccess,
	getRolesFailed,
};

function getRoles() {
	return {
		type: ROLE.GET_ROLES,
	};
}
function getRolesSuccess(data) {
	return {
		type: ROLE.GET_ROLES_SUCCESS,
		response: data,
	};
}
function getRolesFailed(data) {
	return {
		type: ROLE.GET_ROLES_FAILED,
		response: data,
	};
}

export default RolesAction;
