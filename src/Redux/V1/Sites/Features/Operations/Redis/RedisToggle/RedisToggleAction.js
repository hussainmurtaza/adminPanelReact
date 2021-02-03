import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";

const redisToggleStatus = (data) => {
    return {
        type: OPERATION.REDIS_TOGGLE,
        request: data,
    };
};
const redisToggleStatusSuccess = (data) => {
    return {
        type: OPERATION.REDIS_TOGGLE_SUCCESS,
        response: data,
    };
};
const redisToggleStatusFailed = (data) => {
    return {
        type: OPERATION.REDIS_TOGGLE_FAILED,
        response: data,
    };
};

const RedisToggleAction = {
    redisToggleStatus,
    redisToggleStatusSuccess,
    redisToggleStatusFailed,
};
export default RedisToggleAction;
