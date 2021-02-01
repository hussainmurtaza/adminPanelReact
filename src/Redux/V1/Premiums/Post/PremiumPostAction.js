import PREMIUM from "Redux/V1/Premiums/ActionType";

const premiumPost = (data) => {
    return {
        type: PREMIUM.PREMIUM_POST,
        request: data,
    };
};

const premiumPostSuccess = (data) => {
    return {
        type: PREMIUM.PREMIUM_POST_SUCCESS,
        response: data,
    };
};

const premiumPostFailed = (data) => {
    return {
        type: PREMIUM.PREMIUM_POST_FAILED,
        response: data,
    };
};

const PremiumCreateAction = {
    premiumPost,
    premiumPostSuccess,
    premiumPostFailed,
};
export default PremiumCreateAction;
