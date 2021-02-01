import VOUCHER from "Redux/V1/Vouchers/ActionType";

const VoucherDeleteReducer = (
    state = {
        loading: false,
        success: false,
        voucher_delete: {},
        err_mess: "",
    },
    action
) => {
    switch (action.type) {
        case VOUCHER.VOUCHER_DELETE:
            return {
                ...state,
                loading: true,
                err_mess: null,
            };
        case VOUCHER.VOUCHER_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                voucher_delete: action.response,
            };
        case VOUCHER.VOUCHER_DELETE_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default VoucherDeleteReducer;
