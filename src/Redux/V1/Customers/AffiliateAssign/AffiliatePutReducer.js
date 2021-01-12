import AFFILIATE from "Redux/V1/Customers/AffiliateAssign/ActionType";

const AffiliateChangeReducer = (
    state = {
        loading: false,
        success: false,
        affiliate_change: [],
    },
    action
) => {
    switch (action.type) {
        case AFFILIATE.AFFILIATE_PUT:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case AFFILIATE.AFFILIATE_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                affiliate_change: action.response.change_affiliate,
            };
        case AFFILIATE.AFFILIATE_PUT_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default AffiliateChangeReducer;
