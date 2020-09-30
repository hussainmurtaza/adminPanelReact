import USER from "Redux/V1/Users/Get/UserGetActionType";

const UserDetailsAction = {
	getUsers,
	getUsersSuccess,
	getUsersFailed,
};

function getUsers(data) {
	return {
		type: USER.GET_DETAILS,
		request: data,
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

export default UserDetailsAction;
