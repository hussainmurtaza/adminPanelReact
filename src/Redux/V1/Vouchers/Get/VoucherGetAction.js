import VOUCHER from "Redux/V1/Vouchers/ActionType";

const voucherGet = (data) => {
    return {
        type: VOUCHER.VOUCHER_GET,
        request: data,
    };
};
const voucherGetSuccess = (data) => {
    return {
        type: VOUCHER.VOUCHER_GET_SUCCESS,
        response: data,
    };
};
const voucherGetFailed = (data) => {
    return {
        type: VOUCHER.VOUCHER_GET_FAILED,
        response: data,
    };
};
const VoucherGetAction = {
    voucherGet,
    voucherGetSuccess,
    voucherGetFailed,
};

export default VoucherGetAction;
