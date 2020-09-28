import Gateway from "Gateways/Gateway";
import V1 from "Constants/V1ApiConstant";

async function loginPost(data) {
    const _data = loginPostBody(data);
    const response = await Gateway.guestGateway("POST", V1.auth.login, _data);
    return response;
}

const loginPostBody = (data) => {
    let _data = {};
    _data.email = data.email;
    _data.password = data.password;
    return JSON.stringify(_data);
};

const AuthService = {
    loginPost,
};
export default AuthService;
