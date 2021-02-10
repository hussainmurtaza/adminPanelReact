import CUSTOMER from "Redux/V1/Customers/CustomerSite/CustomerSiteActionType";

const customerSite = (data) => {
    return {
        type: CUSTOMER.CUSTOMER_SITE,
        request: data,
    };
};
const customerSiteSuccess = (data) => {
    return {
        type: CUSTOMER.CUSTOMER_SITE_SUCCESS,
        response: data,
    };
};
const customerSiteFailed = (data) => {
    return {
        type: CUSTOMER.CUSTOMER_SITE_FAILED,
        response: data,
    };
};

const CustomerSiteAction = {
    customerSite,
    customerSiteSuccess,
    customerSiteFailed,
};

export default CustomerSiteAction;
