import ROLE from "Redux/V1/Roles/Delete/RoleDeleteActionType";

const RoleDeleteAction = {
	deleteRole,
	deleteRoleSuccess,
	deleteRoleFailed,
};

function deleteRole(data) {
	return {
		type: ROLE.ROLE_DELETE,
		request: data,
	};
}
function deleteRoleSuccess(data) {
	return {
		type: ROLE.ROLE_DELETE_SUCCESS,
		response: data,
	};
}
function deleteRoleFailed(data) {
	return {
		type: ROLE.ROLE_DELETE_FAILED,
		response: data,
	};
}

export default RoleDeleteAction;
