import PREMIUM from "Redux/V1/Premiums/ActionType";

const PremiumCreateReducer = (
    state = {
        loading: false,
        success: false,
        premium_plugin: [],
    },
    action
) => {
    switch (action.type) {
        case PREMIUM.PREMIUM_POST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PREMIUM.PREMIUM_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                premium_plugin: action.response.premium_plugin,
                success: true,
            };
        case PREMIUM.PREMIUM_POST_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default PremiumCreateReducer;
