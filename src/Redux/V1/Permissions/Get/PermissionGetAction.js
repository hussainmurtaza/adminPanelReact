import PERMISSION from "Redux/V1/Permissions/Get/PermissionGetActionType";

const PermissionAction = {
	getPermission,
	getPermissionSuccess,
	getPermissionFailed,
};

function getPermission() {
	return {
		type: PERMISSION.GET_PERMISSION,
	};
}
function getPermissionSuccess(data) {
	return {
		type: PERMISSION.GET_PERMISSION_SUCCESS,
		response: data,
	};
}
function getPermissionFailed(data) {
	return {
		type: PERMISSION.GET_PERMISSION_FAILED,
		response: data,
	};
}

export default PermissionAction;
