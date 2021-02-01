import PREMIUM from "Redux/V1/Premiums/ActionType";

const PremiumDeleteReducer = (
    state = {
        loading: false,
        success: false,
        err_mess: "",
        premium_delete: {},
    },
    action
) => {
    switch (action.type) {
        case PREMIUM.PREMIUM_DELETE:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PREMIUM.PREMIUM_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                premium_delete: action.response,
            };
        case PREMIUM.PREMIUM_DELETE_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default PremiumDeleteReducer;
