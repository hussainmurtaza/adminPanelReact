import VOUCHER from "Redux/V1/Vouchers/ActionType";

const VoucherGetReducer = (
    state = {
        loading: false,
        success: false,
        vouchers: [],
        pagination: "",
    },
    action
) => {
    switch (action.type) {
        case VOUCHER.VOUCHER_GET:
            return {
                ...state,
                loading: true,
                error: null,
                vouchers: [],
                pagination: "",
            };
        case VOUCHER.VOUCHER_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                vouchers: action.response.vouchers,
                pagination: action.response.pagination,
            };
        case VOUCHER.VOUCHER_GET_FAILED:
            return {
                ...state,
                loading: false,
                error: action.response,
                vouchers: [],
                pagination: "",
            };
        default:
            return state;
    }
};
export default VoucherGetReducer;
