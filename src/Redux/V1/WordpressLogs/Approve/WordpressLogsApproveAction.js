import WORDPRESS from "Redux/V1/WordpressLogs/ActionType";

const wordpressLogsApprove = (data) => {
    return {
        type: WORDPRESS.WP_LOGS_APPROVE,
        request: data,
    };
};
const wordpressLogsApproveSuccess = (data) => {
    return {
        type: WORDPRESS.WP_LOGS_APPROVE_SUCCESS,
        response: data,
    };
};
const wordpressLogsApproveFailed = (data) => {
    return {
        type: WORDPRESS.WP_LOGS_APPROVE_FAILED,
        response: data,
    };
};

const WordpressLogsApproveAction = {
    wordpressLogsApprove,
    wordpressLogsApproveSuccess,
    wordpressLogsApproveFailed,
};

export default WordpressLogsApproveAction;
