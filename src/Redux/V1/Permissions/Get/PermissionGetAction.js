import PERMISSION from "Redux/V1/Permissions/Get/PermissionGetActionType";

const PermissionAction = {
	getPermission,
	getPermissionSuccess,
	getPermissionFailed,
};

function getPermission() {
	return {
		type: PERMISSION.PERMISSION_GET,
	};
}
function getPermissionSuccess(data) {
	return {
		type: PERMISSION.PERMISSION_GET_SUCCESS,
		response: data,
	};
}
function getPermissionFailed(data) {
	return {
		type: PERMISSION.PERMISSION_GET_FAILED,
		response: data,
	};
}

export default PermissionAction;
