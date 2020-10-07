import ROLE_DETAILS from "Redux/V1/Roles/First/RoleFirstActionType";

const RoleDetailAction = {
	roleDetail,
	roleDetailSuccess,
	roleDetailFailed,
};

function roleDetail(data) {
	return {
		type: ROLE_DETAILS.ROLE_DETAILS_GET,
		request: data,
	};
}
function roleDetailSuccess(data) {
	return {
		type: ROLE_DETAILS.ROLE_DETAILS_GET_SUCCESS,
		response: data,
	};
}
function roleDetailFailed(data) {
	return {
		type: ROLE_DETAILS.ROLE_DETAILS_GET_FAILED,
		response: data,
	};
}

export default RoleDetailAction;
