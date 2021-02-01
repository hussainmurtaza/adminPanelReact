import VOUCHER from "Redux/V1/Vouchers/ActionType";

const voucherFirst = (data) => {
    return {
        type: VOUCHER.VOUCHER_FIRST,
        request: data,
    };
};
const voucherFirstSuccess = (data) => {
    return {
        type: VOUCHER.VOUCHER_FIRST_SUCCESS,
        response: data,
    };
};
const voucherFirstFailed = (data) => {
    return {
        type: VOUCHER.VOUCHER_FIRST_FAILED,
        response: data,
    };
};

const VoucherFirstAction = {
    voucherFirst,
    voucherFirstSuccess,
    voucherFirstFailed,
};

export default VoucherFirstAction;
