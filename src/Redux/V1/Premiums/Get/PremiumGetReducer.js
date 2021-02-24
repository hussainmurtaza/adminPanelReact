import PREMIUM from "Redux/V1/Premiums/ActionType";

const PremiumListReducer = (
    state = {
        loading: false,
        premium_plugins: [],
        pagination: "",
    },
    action
) => {
    switch (action.type) {
        case PREMIUM.PREMIUM_GET:
            return {
                ...state,
                loading: true,
                error: null,
                premium_plugins: [],
                pagination: "",
            };
        case PREMIUM.PREMIUM_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                premium_plugins: action.response.premium_plugins,
                pagination: action.response.pagination,
            };
        case PREMIUM.PREMIUM_GET_FAILED:
            return {
                ...state,
                loading: false,
                error: action.response,
                premium_plugins: [],
                pagination: "",
            };
        default:
            return state;
    }
};
export default PremiumListReducer;
