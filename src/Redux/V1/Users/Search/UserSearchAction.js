import USER from "Redux/V1/Users/Search/UserSearchActionType";

const UserSearchAction = {
	searchUsers,
	searchUsersSuccess,
	searchUsersFailed,
};

function searchUsers(data) {
	return {
		type: USER.USERS_SEARCH,
		request: data,
	};
}
function searchUsersSuccess(data) {
	return {
		type: USER.USERS_SEARCH_SUCCESS,
		response: data,
	};
}
function searchUsersFailed(data) {
	return {
		type: USER.USERS_SEARCH_FAILED,
		response: data,
	};
}

export default UserSearchAction;
