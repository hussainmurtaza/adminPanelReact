import USER_DETAILS from "Redux/V1/Users/First/UserFirstActionType";

const UserDetailAction = {
	userDetail,
	userDetailSuccess,
	userDetailFailed,
};

function userDetail(data) {
	return {
		type: USER_DETAILS.USER_DETAILS_GET,
		request: data,
	};
}
function userDetailSuccess(data) {
	return {
		type: USER_DETAILS.USER_DETAILS_GET_SUCCESS,
		response: data,
	};
}
function userDetailFailed(data) {
	return {
		type: USER_DETAILS.USER_DETAILS_GET_FAILED,
		response: data,
	};
}

export default UserDetailAction;
