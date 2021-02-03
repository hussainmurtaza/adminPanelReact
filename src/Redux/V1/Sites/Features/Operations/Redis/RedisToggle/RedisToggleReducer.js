import OPERATION from "Redux/V1/Sites/Features/Operations/ActionType";

const RedisToggleReducer = (
    state = {
        loading: false,
        success: false,
        redis_toggle: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case OPERATION.REDIS_TOGGLE:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case OPERATION.REDIS_TOGGLE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                redis_toggle: action.response.redis_toggle,
            };
        case OPERATION.REDIS_TOGGLE_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default RedisToggleReducer;
