import LOGIN from "Redux/V1/Auth/Login/ActionType";
import LoginHelper from "Helpers/LoginHelper";

const LoginReducer = (
    state = {
        loading: false,
        isAuthenticated: localStorage.getItem("access_token") ? true : false,
        token: localStorage.getItem("access_token"),
        user: localStorage.getItem("user")
            ? LoginHelper.localData(localStorage.getItem("user"))
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
