import VOUCHER from "Redux/V1/Vouchers/ActionType";

const VoucherGetReducer = (
    state = {
        loading: false,
        vouchers: [],
    },
    action
) => {
    switch (action.type) {
        case VOUCHER.VOUCHER_GET:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case VOUCHER.VOUCHER_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                vouchers: action.response.vouchers,
            };
        case VOUCHER.VOUCHER_GET_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default VoucherGetReducer;
