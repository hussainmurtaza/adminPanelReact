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

const redisFirst = async (data) => {
    const response = await Gateway.authGateway(
        "GET",
        V1.operation.redis + data
    );
    return response;
};
const redisDelete = async (data) => {
    const response = await Gateway.authGateway(
        "DELETE",
        V1.operation.redis + data
    );
    return response;
};
const redisToggleStatus = async (data) => {
    const _data = redisBody(data);
    const response = await Gateway.authGateway(
        "PUT",
        V1.operation.redis + data.identity,
        _data
    );
    return response;
};

const redisBody = (data) => {
    let _data = {};
    _data.status = data.status;
    return JSON.stringify(_data);
};

const redisCache = async (data) => {
    const response = await Gateway.authGateway(
        "PUT",
        V1.operation.redis_cache + data
    );
    return response;
};

const OperationService = {
    cachePut,
    permissionsGet,
    botPut,
    redisFirst,
    redisDelete,
    redisToggleStatus,
    redisCache,
};

export default OperationService;
