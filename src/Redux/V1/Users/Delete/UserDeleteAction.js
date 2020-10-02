import USER from "Redux/V1/Users/Delete/UserDeleteActionType";

const UserDeleteAction = {
	deleteUser,
	deleteUserSuccess,
	deleteUserFailed,
};

function deleteUser(data) {
	return {
		type: USER.USER_DELETE,
		request: data,
	};
}
function deleteUserSuccess(data) {
	return {
		type: USER.USER_DELETE_SUCCESS,
		response: data,
	};
}
function deleteUserFailed(data) {
	return {
		type: USER.USER_DELETE_FAILED,
		response: data,
	};
}

export default UserDeleteAction;
