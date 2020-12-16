import LOGIN from "Redux/V1/Auth/Login/ActionType";
import LoginHelper from "Helpers/LoginHelper";

const LoginReducer = (
	state = {
		loading: false,
		isAuthenticated: localStorage.getItem("admin_access_token")
			? true
			: false,
		token: localStorage.getItem("admin_access_token"),
		user: localStorage.getItem("admin_user")
			? LoginHelper.localData(localStorage.getItem("admin_user"))
			: null,
		permissions: localStorage.getItem("permissions")
			? LoginHelper.localData(localStorage.getItem("permissions"))
			: null,
	},
	action
) => {
	switch (action.type) {
		case LOGIN.LOGIN_POST:
			return { ...state, loading: true };
		case LOGIN.LOGIN_POST_SUCCESS:
			return { ...state, loading: false, login: action.response };
		case LOGIN.LOGIN_POST_FAILED:
			return { ...state, loading: false };
		default:
			return state;
	}
};

export default LoginReducer;
