import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";

const redisFirst = (data) => {
    return {
        type: OPERATION.REDIS_FIRST,
        request: data,
    };
};
const redisFirstSuccess = (data) => {
    return {
        type: OPERATION.REDIS_FIRST_SUCCESS,
        response: data,
    };
};
const redisFirstFailed = (data) => {
    return {
        type: OPERATION.REDIS_FIRST_FAILED,
        response: data,
    };
};

const RedisDetailAction = {
    redisFirst,
    redisFirstSuccess,
    redisFirstFailed,
};
export default RedisDetailAction;
