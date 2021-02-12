import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const wordpressLogs = async (data) => {
    const query = window.location.search;
    const response = await Gateway.authGateway(
        "GET",
        `${V1.wordpress_logs}${query}`
    );
    return response;
};

const wordpressLogsApprove = async (data) => {
    const _data = wordpressLogsBody(data);
    const response = await Gateway.authGateway(
        "PUT",
        V1.wordpress_logs + "/" + data.id,
        _data
    );
    return response;
};

const wordpressLogsBody = (data) => {
    let _data = {};
    _data.status = data.status;
    return JSON.stringify(_data);
};

const WordpressLogService = {
    wordpressLogs,
    wordpressLogsApprove,
};

export default WordpressLogService;
