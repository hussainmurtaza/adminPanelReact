import USER from "Redux/V1/Users/First/UserFirstActionType";

const UserFirstAction = {
	userFirst,
	userFirstSuccess,
	userFirstFailed,
};

function userFirst(data) {
	return {
		type: USER.USER_FIRST,
		request: data,
	};
}
function userFirstSuccess(data) {
	return {
		type: USER.USER_FIRST_SUCCESS,
		response: data,
	};
}
function userFirstFailed(data) {
	return {
		type: USER.USER_FIRST_FAILED,
		response: data,
	};
}

export default UserFirstAction;
