import USER from "Redux/V1/Users/Get/UserGetActionType";

const UsersAction = {
	getUsers,
	getUsersSuccess,
	getUsersFailed,
};

function getUsers() {
	return {
		type: USER.GET_USERS,
	};
}
function getUsersSuccess(data) {
	return {
		type: USER.GET_USERS_SUCCESS,
		response: data,
	};
}
function getUsersFailed(data) {
	return {
		type: USER.GET_USERS_FAILED,
		response: data,
	};
}

export default UsersAction;
