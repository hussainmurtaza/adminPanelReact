import VOUCHER from "Redux/V1/Vouchers/ActionType";

const voucherPost = (data) => {
    return {
        type: VOUCHER.VOUCHER_POST,
        request: data,
    };
};

const voucherPostSuccess = (data) => {
    return {
        type: VOUCHER.VOUCHER_POST_SUCCESS,
        response: data,
    };
};
const voucherPostFailed = (data) => {
    return {
        type: VOUCHER.VOUCHER_POST_FAILED,
        response: data,
    };
};

const VoucherPostAction = {
    voucherPost,
    voucherPostSuccess,
    voucherPostFailed,
};
export default VoucherPostAction;
