import VOUCHER from "Redux/V1/Vouchers/ActionType";

const VoucherPutReducer = (
    state = {
        loading: false,
        success: false,
        voucher_put: [],
    },
    action
) => {
    switch (action.type) {
        case VOUCHER.VOUCHER_PUT:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case VOUCHER.VOUCHER_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                voucher_put: action.response.voucher_put,
                success: true,
            };
        case VOUCHER.VOUCHER_PUT_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default VoucherPutReducer;
