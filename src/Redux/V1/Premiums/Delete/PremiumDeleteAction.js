import PREMIUM from "Redux/V1/Premiums/ActionType";

const premiumDelete = (data) => {
    return {
        type: PREMIUM.PREMIUM_DELETE,
        request: data,
    };
};

const premiumDeleteSuccess = (data) => {
    return {
        type: PREMIUM.PREMIUM_DELETE_SUCCESS,
        response: data,
    };
};
const premiumDeleteFailed = (data) => {
    return {
        type: PREMIUM.PREMIUM_DELETE_FAILED,
        response: data,
    };
};

const PremiumDeleteAction = {
    premiumDelete,
    premiumDeleteSuccess,
    premiumDeleteFailed,
};

export default PremiumDeleteAction;
