import AFFILIATE from "Redux/V1/Customers/AffiliateAssign/ActionType";

const affiliatePut = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_PUT,
        request: data,
    };
};
const affiliatePutSuccess = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_PUT_SUCCESS,
        response: data,
    };
};
const affiliatePutFailed = (data) => {
    return {
        type: AFFILIATE.AFFILIATE_PUT_FAILED,
        response: data,
    };
};

const AffiliateChange = {
    affiliatePut,
    affiliatePutSuccess,
    affiliatePutFailed,
};
export default AffiliateChange;
