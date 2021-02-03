import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";

const RedisDeleteReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
        redis_delete: {},
    },
    action
) => {
    switch (action.type) {
        case OPERATION.REDIS_DELETE:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case OPERATION.REDIS_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                redis_delete: action.response,
            };
        case OPERATION.REDIS_DELETE_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default RedisDeleteReducer;
