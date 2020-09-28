import config from "Configs/index";
import Store from "Redux/Store";
import LogoutHelper from "Helpers/LogoutHelper";

async function authGateway(METHOD, API, BODY = null) {
    const URL = `${config.base_url}${API}`;
    const TOKEN = Store.getState().LoginReducer.token;
    const OPTIONS = {
        method: METHOD,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
        },
        body: BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                if (response.error.code === "BIOWP-401") {
                    LogoutHelper.logout();
                } else if (response.error.code === "BIOWP-404") {
                    window.location.href = "/404";
                }
            }
            console.log(response);
            return response;
        });
}

async function guestGateway(METHOD, API, BODY = null) {
    const URL = `${config.base_url}${API}`;
    const OPTIONS = {
        method: METHOD,
        headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Client-ID": config.client_id,
            "Client-Secret": config.client_secret,
        },
        body: BODY,
    };
    return await fetch(URL, OPTIONS)
        .then(handleResponse)
        .then((response) => {
            if (response.success !== true) {
                //error handling
            }
            return response;
        });
}

function handleResponse(response) {
    return response.text().then((text) => {
        return text && JSON.parse(text);
    });
}
const Gateway = {
    guestGateway,
    authGateway,
};
export default Gateway;
