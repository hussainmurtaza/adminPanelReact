import USER from "Redux/V1/Users/Post/UserPostActionType";

const PostUsersAction = {
	postUsers,
	postUsersSuccess,
	postUsersFailed,
};

function postUsers(data) {
	return {
		type: USER.USERS_POST,
		request: data,
	};
}
function postUsersSuccess(data) {
	return {
		type: USER.USERS_POST_SUCCESS,
		response: data,
	};
}
function postUsersFailed(data) {
	return {
		type: USER.USERS_POST_FAILED,
		response: data,
	};
}

export default PostUsersAction;
