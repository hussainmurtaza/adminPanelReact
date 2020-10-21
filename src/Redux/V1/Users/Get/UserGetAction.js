import USER from "Redux/V1/Users/Get/UserGetActionType";

const UsersAction = {
	getUsers,
	getUsersSuccess,
	getUsersFailed,
};

function getUsers() {
	return {
		type: USER.USERS_GET,
	};
}
function getUsersSuccess(data) {
	return {
		type: USER.USERS_GET_SUCCESS,
		response: data,
	};
}
function getUsersFailed(data) {
	return {
		type: USER.USERS_GET_FAILED,
		response: data,
	};
}

export default UsersAction;
