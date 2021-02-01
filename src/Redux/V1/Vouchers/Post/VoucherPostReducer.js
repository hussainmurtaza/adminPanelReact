import VOUCHER from "Redux/V1/Vouchers/ActionType";

const VoucherPostReducer = (
    state = {
        loading: false,
        success: false,
        voucher_post: [],
    },
    action
) => {
    switch (action.type) {
        case VOUCHER.VOUCHER_POST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case VOUCHER.VOUCHER_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                voucher_post: action.response.voucher_post,
                success: true,
            };
        case VOUCHER.VOUCHER_POST_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default VoucherPostReducer;
