import ROLE from "Redux/V1/Roles/First/RoleFirstActionType";

const RoleFirstAction = {
	roleFirst,
	roleFirstSuccess,
	roleFirstFailed,
};

function roleFirst(data) {
	return {
		type: ROLE.ROLE_FIRST,
		request: data,
	};
}
function roleFirstSuccess(data) {
	return {
		type: ROLE.ROLE_FIRST_SUCCESS,
		response: data,
	};
}
function roleFirstFailed(data) {
	return {
		type: ROLE.ROLE_FIRST_FAILED,
		response: data,
	};
}

export default RoleFirstAction;
