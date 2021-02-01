import VOUCHER from "Redux/V1/Vouchers/ActionType";

const voucherDelete = (data) => {
    return {
        type: VOUCHER.VOUCHER_DELETE,
        request: data,
    };
};
const voucherDeleteSuccess = (data) => {
    return {
        type: VOUCHER.VOUCHER_DELETE_SUCCESS,
        response: data,
    };
};

const voucherDeleteFailed = (data) => {
    return {
        type: VOUCHER.VOUCHER_DELETE_FAILED,
        response: data,
    };
};

const VoucherDeleteAction = {
    voucherDelete,
    voucherDeleteSuccess,
    voucherDeleteFailed,
};

export default VoucherDeleteAction;
