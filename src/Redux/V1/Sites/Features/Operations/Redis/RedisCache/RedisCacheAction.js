import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";

const redisCache = (data) => {
    return {
        type: OPERATION.REDIS_CACHE,
        request: data,
    };
};
const redisCacheSuccess = (data) => {
    return {
        type: OPERATION.REDIS_CACHE_SUCCESS,
        response: data,
    };
};

const redisCacheFailed = (data) => {
    return {
        type: OPERATION.REDIS_CACHE_FAILED,
        response: data,
    };
};

const RedisCacheAction = {
    redisCache,
    redisCacheSuccess,
    redisCacheFailed,
};
export default RedisCacheAction;
