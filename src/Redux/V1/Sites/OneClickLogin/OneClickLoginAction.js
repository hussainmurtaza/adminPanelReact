import ONECLICKLOGIN from "Redux/V1/Sites/OneClickLogin/OneClickLoginActionType";

const OneClickLoginAction = {
	getOneClickLogin,
	getOneClickLoginSuccess,
	getOneClickLoginFailed,
};

function getOneClickLogin(data) {
	return {
		type: ONECLICKLOGIN.ONECLICKLOGIN_GET,
		request: data,
	};
}
function getOneClickLoginSuccess(data) {
	return {
		type: ONECLICKLOGIN.ONECLICKLOGIN_GET_SUCCESS,
		response: data,
	};
}

function getOneClickLoginFailed(data) {
	return {
		type: ONECLICKLOGIN.ONECLICKLOGIN_GET_FAILED,
		response: data,
	};
}

export default OneClickLoginAction;
