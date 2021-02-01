import PREMIUM from "Redux/V1/Premiums/ActionType";

const PremiumUpdateReducer = (
    state = {
        loading: false,
        success: false,
        premium_plugin: [],
    },
    action
) => {
    switch (action.type) {
        case PREMIUM.PREMIUM_PUT:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PREMIUM.PREMIUM_PUT_SUCCESS:
            return {
                ...state,
                loading: false,
                premium_plugin: action.response.premium_plugin,
                success: true,
            };
        case PREMIUM.PREMIUM_PUT_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default PremiumUpdateReducer;
