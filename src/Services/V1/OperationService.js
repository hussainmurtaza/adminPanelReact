import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const cachePut = async (data) => {
    const response = await Gateway.authGateway(
        "PUT",
        V1.operation.cache_clear + data
    );
    return response;
};
const permissionsGet = async (data) => {
    const response = await Gateway.authGateway(
        "GET",
        V1.operation.permissions_reset + data
    );
    return response;
};
const botPut = async (data) => {
    const _data = botPutBody(data);
    const response = await Gateway.authGateway(
        "PUT",
        V1.operation.bot_block + data.identity,
        _data
    );
    return response;
};
const botPutBody = (data) => {
    let _data = {};
    _data.status = data.status;
    return JSON.stringify(_data);
};
const OperationService = {
    cachePut,
    permissionsGet,
    botPut,
};

export default OperationService;
