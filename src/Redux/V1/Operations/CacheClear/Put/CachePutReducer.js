import OPERATION from "Redux/V1/Operations/ActionType";

const CacheClearReducer = (
    state = {
        loading: false,
        success: false,
        cache_clear: [],
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case OPERATION.CACHE_PUT:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case OPERATION.CACHE_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                cache_clear: action.response,
            };
        case OPERATION.CACHE_PUT_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default CacheClearReducer;
