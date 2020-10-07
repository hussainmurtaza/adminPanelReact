import ROLE from "Redux/V1/Roles/Put/RolePutActionType";

const RolesPutAction = {
	rolePut,
	rolePutSuccess,
	rolePutFailed,
};

function rolePut(data) {
	return {
		type: ROLE.ROLE_PUT,
		request: data,
	};
}
function rolePutSuccess(data) {
	return {
		type: ROLE.ROLE_PUT_SUCCESS,
		response: data,
	};
}
function rolePutFailed(data) {
	return {
		type: ROLE.ROLE_PUT_FAILED,
		response: data,
	};
}

export default RolesPutAction;
