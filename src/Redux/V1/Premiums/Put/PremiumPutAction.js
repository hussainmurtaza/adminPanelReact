import PREMIUM from "Redux/V1/Premiums/ActionType";

const premiumPut = (data) => {
    return {
        type: PREMIUM.PREMIUM_PUT,
        request: data,
    };
};
const premiumPutSuccess = (data) => {
    return {
        type: PREMIUM.PREMIUM_PUT_SUCCESS,
        response: data,
    };
};
const premiumPutFailed = (data) => {
    return {
        type: PREMIUM.PREMIUM_PUT_FAILED,
        response: data,
    };
};

const PremiumUpdateAction = {
    premiumPut,
    premiumPutSuccess,
    premiumPutFailed,
};
export default PremiumUpdateAction;
