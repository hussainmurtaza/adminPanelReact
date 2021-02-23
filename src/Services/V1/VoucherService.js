import V1 from "Constants/V1ApiConstant";
import Gateway from "Gateways/Gateway";

const voucherGet = async (data) => {
    const query = window.location.search;
    const response = await Gateway.authGateway(
        "GET",
        `${V1.voucher.vouchers}${query}`
    );
    return response;
};

const voucherFirst = async (data) => {
    const response = await Gateway.authGateway(
        "GET",
        V1.voucher.vouchers + "/" + data
    );
    return response;
};

const voucherDelete = async (data) => {
    const response = await Gateway.authGateway(
        "DELETE",
        V1.voucher.vouchers + "/" + data
    );
    return response;
};

const voucherPost = async (data) => {
    const response = await Gateway.authGateway(
        "POST",
        V1.voucher.vouchers,
        voucherPostData(data)
    );
    return response;
};

const voucherPostData = (data) => {
    let _data = {};
    _data.promo_code = data.promo_code;
    _data.amount = parseFloat(data.amount);
    _data.status = data.status.value;
    _data.max_usage_limit = parseInt(data.max_usage_limit);
    _data.start_date = data.start_date;
    _data.end_date = data.end_date;
    _data.affiliate_id = data.affiliate_id;

    return JSON.stringify(_data);
};

const voucherPut = async (data, id) => {
    const response = await Gateway.authGateway(
        "PUT",
        `${V1.voucher.vouchers}/${id}`,
        voucherPostData(data.form)
    );
    return response;
};

const VoucherService = {
    voucherGet,
    voucherFirst,
    voucherDelete,
    voucherPost,
    voucherPut,
};

export default VoucherService;
