import USER from "Redux/V1/Users/Filter/UserFilterActionType";

const UserFilterAction = {
	filterUsers,
	filterUsersSuccess,
	filterUsersFailed,
};

function filterUsers(data) {
	return {
		type: USER.USERS_FILTER,
		request: data,
	};
}
function filterUsersSuccess(data) {
	return {
		type: USER.USERS_FILTER_SUCCESS,
		response: data,
	};
}
function filterUsersFailed(data) {
	return {
		type: USER.USERS_FILTER_FAILED,
		response: data,
	};
}

export default UserFilterAction;
