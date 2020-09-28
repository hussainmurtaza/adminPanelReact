import LOGIN from "Redux/V1/Auth/Login/ActionType";

const loginPost = (request) => {
    return { type: LOGIN.LOGIN_POST, request };
};

const loginPostSuccess = (response) => {
    return { type: LOGIN.LOGIN_POST_SUCCESS, response };
};

const loginPostFailed = (response) => {
    return { type: LOGIN.LOGIN_POST_FAILED, response };
};

const LoginAction = {
    loginPost,
    loginPostSuccess,
    loginPostFailed,
};

export default LoginAction;
