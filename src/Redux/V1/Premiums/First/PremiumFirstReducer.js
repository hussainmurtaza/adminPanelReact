import PREMIUM from "Redux/V1/Premiums/ActionType";

const PremiumDetailReducer = (
    state = {
        loading: false,
        fetched: false,
        premium_plugin: {},
    },
    action
) => {
    switch (action.type) {
        case PREMIUM.PREMIUM_FIRST:
            return {
                ...state,
                loading: true,
                error: null,
                fetched: false,
            };
        case PREMIUM.PREMIUM_FIRST_SUCCESS:
            return {
                ...state,
                loading: false,
                premium_plugin: action.response.premium_plugin,
                fetched: true,
            };
        case PREMIUM.PREMIUM_FIRST_FAILED:
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
export default PremiumDetailReducer;
