import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";

const redisDelete = (data) => {
    return {
        type: OPERATION.REDIS_DELETE,
        request: data,
    };
};
const redisDeleteSuccess = (data) => {
    return {
        type: OPERATION.REDIS_DELETE_SUCCESS,
        response: data,
    };
};
const redisDeleteFailed = (data) => {
    return {
        type: OPERATION.REDIS_DELETE_FAILED,
        response: data,
    };
};

const RedisDeleteAction = {
    redisDelete,
    redisDeleteSuccess,
    redisDeleteFailed,
};

export default RedisDeleteAction;
