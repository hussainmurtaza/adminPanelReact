import ROLE from "Redux/V1/Roles/Put/RolePutActionType";

const PutRolesAction = {
	putRoles,
	putRolesSuccess,
	putRolesFailed,
};

function putRoles(data) {
	return {
		type: ROLE.ROLE_PUT,
		request: data,
	};
}
function putRolesSuccess(data) {
	return {
		type: ROLE.ROLE_PUT_SUCCESS,
		response: data,
	};
}
function putRolesFailed(data) {
	return {
		type: ROLE.ROLE_PUT_FAILED,
		response: data,
	};
}

export default PutRolesAction;
