import USER from "Redux/V1/Users/Put/UserPutActionType";

const UsersPutAction = {
	userPut,
	userPutSuccess,
	userPutFailed,
};

function userPut(data) {
	return {
		type: USER.USERS_PUT,
		request: data,
	};
}
function userPutSuccess(data) {
	return {
		type: USER.USERS_PUT_SUCCESS,
		response: data,
	};
}
function userPutFailed(data) {
	return {
		type: USER.USERS_PUT_FAILED,
		response: data,
	};
}

export default UsersPutAction;
