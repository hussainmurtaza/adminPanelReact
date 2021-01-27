import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const wordpressUpdateGet = async (data) => {
    const response = await Gateway.authGateway(
        "GET",
        `${V1.wordpress.update_all}/${data}`
    );
    return response;
};
const wordpressUpdatePut = async (data) => {
    const _data = wordpressBody(data);
    const response = await Gateway.authGateway(
        "PUT",
        V1.wordpress.update_all + "/" + data.slug,
        _data
    );
    return response;
};
const wordpressBody = (data) => {
    let _data = {};
    _data.type = data.type;
    _data.identities = data.identity;
    return JSON.stringify(_data);
};

const WordpressUpdateService = {
    wordpressUpdateGet,
    wordpressUpdatePut,
};

export default WordpressUpdateService;
