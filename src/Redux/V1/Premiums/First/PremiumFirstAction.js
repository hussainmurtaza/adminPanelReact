import PREMIUM from "Redux/V1/Premiums/ActionType";

const premiumFirst = (data) => {
    return {
        type: PREMIUM.PREMIUM_FIRST,
        request: data,
    };
};
const premiumFirstSuccess = (data) => {
    return {
        type: PREMIUM.PREMIUM_FIRST_SUCCESS,
        response: data,
    };
};
const premiumFirstFailed = (data) => {
    return {
        type: PREMIUM.PREMIUM_FIRST_SUCCESS,
        response: data,
    };
};

const PremiumDetailAction = {
    premiumFirst,
    premiumFirstSuccess,
    premiumFirstFailed,
};

export default PremiumDetailAction;
