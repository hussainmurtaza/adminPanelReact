import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";

const RedisDetailReducer = (
    state = {
        loading: false,
        err_mess: null,
        redis: {},
    },
    action
) => {
    switch (action.type) {
        case OPERATION.REDIS_FIRST:
            return {
                ...state,
                loading: true,
                fetched: false,
            };
        case OPERATION.REDIS_FIRST_SUCCESS:
            return {
                ...state,
                loading: false,
                redis: action.response.redis,
                fetched: true,
            };
        case OPERATION.REDIS_FIRST_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                fetched: true,
            };
        default:
            return state;
    }
};

export default RedisDetailReducer;
