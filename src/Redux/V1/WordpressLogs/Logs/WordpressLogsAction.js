import WORDPRESS from "Redux/V1/WordpressLogs/ActionType";

const wordpressLogs = (data) => {
    return {
        type: WORDPRESS.WP_LOGS,
        request: data,
    };
};
const wordpressLogsSuccess = (data) => {
    return {
        type: WORDPRESS.WP_LOGS_SUCCESS,
        response: data,
    };
};
const wordpressLogsFailed = (data) => {
    return {
        type: WORDPRESS.WP_LOGS_FAILED,
        response: data,
    };
};
const WorpdressLogsListAction = {
    wordpressLogs,
    wordpressLogsSuccess,
    wordpressLogsFailed,
};
export default WorpdressLogsListAction;
