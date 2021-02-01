import PREMIUM from "Redux/V1/Premiums/ActionType";

const PremiumListReducer = (
    state = {
        loading: false,
        premium_plugins: [],
    },
    action
) => {
    switch (action.type) {
        case PREMIUM.PREMIUM_GET:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PREMIUM.PREMIUM_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                premium_plugins: action.response.premium_plugins,
            };
        case PREMIUM.PREMIUM_GET_FAILED:
            return { ...state, loading: false, error: action.response };
        default:
            return state;
    }
};
export default PremiumListReducer;
