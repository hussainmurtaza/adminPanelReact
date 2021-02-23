import VOUCHER from "Redux/V1/Vouchers/ActionType";

const VoucherFirstReducer = (
    state = {
        loading: false,
        voucher: {
            user: {},
        },
        fetched: false,
    },
    action
) => {
    switch (action.type) {
        case VOUCHER.VOUCHER_FIRST:
            return {
                ...state,
                loading: true,
                error: null,
                fetched: false,
            };
        case VOUCHER.VOUCHER_FIRST_SUCCESS:
            return {
                ...state,
                loading: false,
                voucher: action.response.voucher,
                fetched: true,
            };
        case VOUCHER.VOUCHER_FIRST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.response,
                fetched: true,
            };
        default:
            return state;
    }
};
export default VoucherFirstReducer;
