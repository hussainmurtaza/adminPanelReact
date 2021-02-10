import CUSTOMER from "Redux/V1/Customers/CustomerSite/CustomerSiteActionType";

const CustomerSiteReducer = (
    state = {
        loading: false,
        sites: [],
        err_mess: null,
    },
    action
) => {
    switch (action.type) {
        case CUSTOMER.CUSTOMER_SITE:
            return {
                ...state,
                loading: true,
                sites: [],
            };
        case CUSTOMER.CUSTOMER_SITE_SUCCESS:
            return {
                ...state,
                loading: false,
                sites: action.response.sites,
            };
        case CUSTOMER.CUSTOMER_SITE_FAILED:
            return {
                ...state,
                loading: false,
                err_mess: action.response,
                sites: [],
            };
        default:
            return state;
    }
};

export default CustomerSiteReducer;
