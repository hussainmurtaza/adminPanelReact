import USER from "Redux/V1/Users/ToggleStatus/UserStatusActionType";

const UserStatusAction = {
	userStatus,
	userStatusSuccess,
	userStatusFailed,
};

function userStatus(data) {
	return {
		type: USER.USER_STATUS,
		request: data,
	};
}
function userStatusSuccess(data) {
	return {
		type: USER.USER_STATUS_SUCCESS,
		response: data,
	};
}
function userStatusFailed(data) {
	return {
		type: USER.USER_STATUS_FAILED,
		response: data,
	};
}

export default UserStatusAction;
