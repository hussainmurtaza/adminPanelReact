import WORDPRESS from "Redux/V1/WordpressLogs/ActionType";

const WorpdressLogsListReducer = (
    state = {
        loading: false,
        success: false,
        wordpress_logs: [],
        pagination: {},
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case WORDPRESS.WP_LOGS:
            return {
                ...state,
                loading: true,
                err_mess: null,
                success: false,
                wordpress_logs: [],
                pagination: {},
            };
        case WORDPRESS.WP_LOGS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                wordpress_logs: action.response.content,
                err_mess: null,
                pagination: action.response.pagination,
            };
        case WORDPRESS.WP_LOGS_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                wordpress_logs: [],
                err_mess: action.response,
                pagination: {},
            };
        default:
            return state;
    }
};

export default WorpdressLogsListReducer;
