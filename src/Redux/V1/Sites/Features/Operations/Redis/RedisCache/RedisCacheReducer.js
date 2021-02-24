import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";

const RedisCacheReducer = (
    state = {
        loading: false,
        err_mess: null,
        redisCache: {},
    },
    action
) => {
    switch (action.type) {
        case OPERATION.REDIS_CACHE:
            return {
                ...state,
                loading: true,
                fetched: false,
            };
        case OPERATION.REDIS_CACHE_SUCCESS:
            return {
                ...state,
                loading: false,
                redisCache: action.response,
                fetched: true,
            };
        case OPERATION.REDIS_CACHE_FAILED:
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

export default RedisCacheReducer;
