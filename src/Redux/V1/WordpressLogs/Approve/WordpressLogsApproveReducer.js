import WORDPRESS from "Redux/V1/WordpressLogs/ActionType";

const WordpressLogsApproveReducer = (
    state = {
        loading: false,
        success: false,
        logs_approve: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WP_LOGS_APPROVE:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case WORDPRESS.WP_LOGS_APPROVE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                logs_approve: action.response.logs_approve,
            };
        case WORDPRESS.WP_LOGS_APPROVE_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default WordpressLogsApproveReducer;
