import PREMIUM from "Redux/V1/Premiums/ActionType";

const premiumGet = () => {
    return {
        type: PREMIUM.PREMIUM_GET,
    };
};

const premiumGetSuccess = (data) => {
    return {
        type: PREMIUM.PREMIUM_GET_SUCCESS,
        response: data,
    };
};
const premiumGetFailed = (data) => {
    return {
        type: PREMIUM.PREMIUM_GET_FAILED,
        response: data,
    };
};

const PremiumListAction = {
    premiumGet,
    premiumGetSuccess,
    premiumGetFailed,
};

export default PremiumListAction;
