import VOUCHER from "Redux/V1/Vouchers/ActionType";

const voucherPut = (data) => {
    return {
        type: VOUCHER.VOUCHER_PUT,
        request: data,
    };
};
const voucherPutSuccess = (data) => {
    return {
        type: VOUCHER.VOUCHER_PUT_SUCCESS,
        response: data,
    };
};

const voucherPutFailed = (data) => {
    return {
        type: VOUCHER.VOUCHER_PUT_FAILED,
        response: data,
    };
};

const VoucherPutAction = {
    voucherPut,
    voucherPutSuccess,
    voucherPutFailed,
};
export default VoucherPutAction;
