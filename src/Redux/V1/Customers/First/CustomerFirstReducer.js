import CUSTOMER from "Redux/V1/Customers/First/CustomerFirstActionType";

const customerDetails = (
    state = {
        loading: false,
        customer_response: [],
        customer: [],
        affiliate: [],
        err_mess: null,
        fetched: false,
    },
    action
) => {
    switch (action.type) {
        case CUSTOMER.CUSTOMER_FIRST:
            return {
                ...state,
                loading: true,
            };
        case CUSTOMER.CUSTOMER_FIRST_SUCCESS:
            return {
                ...state,
                loading: false,
                customer_response: action.response,
                customer: action.response.customer,
                affiliate: action.response.customer.affiliate,
                fetched: true,
            };
        case CUSTOMER.CUSTOMER_FIRST_FAILED:
            return { ...state, loading: false, err_mess: action.response };
        default:
            return state;
    }
};

export default customerDetails;
