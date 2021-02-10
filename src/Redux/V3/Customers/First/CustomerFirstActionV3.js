import CUSTOMER from "Redux/V3/Customers/ActionTypeV3";

const customerFirst = (data) => {
    return {
        type: CUSTOMER.CUSTOMER_FIRST_V3,
        request: data,
    };
};
const customerFirstSuccess = (data) => {
    return {
        type: CUSTOMER.CUSTOMER_FIRST_SUCCESS_V3,
        response: data,
    };
};
const customerFirstFailed = (data) => {
    return {
        type: CUSTOMER.CUSTOMER_FIRST_FAILED_V3,
        response: data,
    };
};

const CustomerFirstActionV3 = {
    customerFirst,
    customerFirstSuccess,
    customerFirstFailed,
};
export default CustomerFirstActionV3;
